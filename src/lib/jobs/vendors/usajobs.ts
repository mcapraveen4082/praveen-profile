import type { Job, JobSource } from "../types";

import { withTTLCache } from "../cache";
import { stripHtml, trimText } from "../utils";

const SOURCE: JobSource = "usajobs";

type USAJobsPosition = {
  PositionTitle?: string;
  PositionURI?: string;
  ApplyURI?: string[];
  OrganizationName?: string;
  PositionLocationDisplay?: string;
  PositionFormattedDescription?: { Content?: string }[];
  QualificationSummary?: string;
};

type USAJobsItem = {
  MatchedObjectId?: string;
  MatchedObjectDescriptor?: USAJobsPosition;
};

export async function fetchUSAJobs(opts?: {
  limit?: number;
  keyword?: string;
  remoteOnly?: boolean;
}): Promise<Job[]> {
  const limit = opts?.limit ?? 25;
  const keyword = opts?.keyword ?? "software engineer";
  const remoteOnly = opts?.remoteOnly ?? true;

  const apiKey = "OWVD4C9jvQb/dnd1TG3Y55x/f8Kmw53YIT+MScQzNyU=";
  const userAgentEmail = "mca.praveen4082.5@gmail.com";

  if (!apiKey) {
    throw new Error("USAJOBS API not configured (missing USAJOBS_API_KEY).");
  }
  if (!userAgentEmail) {
    throw new Error(
      "USAJOBS API not configured (missing USAJOBS_USER_AGENT_EMAIL).",
    );
  }

  const cacheKey = `usajobs:${limit}:${keyword}:${remoteOnly}`;

  return withTTLCache(cacheKey, 10 * 60 * 1000, async () => {
    const timeoutMs = 8000;

    async function fetchOnce(keywordQuery: string): Promise<Job[]> {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const url = new URL("https://data.usajobs.gov/api/Search");
        url.searchParams.set("Keyword", keywordQuery);
        url.searchParams.set("ResultsPerPage", String(limit));
        url.searchParams.set("Fields", "Full");
        url.searchParams.set("WhoMayApply", "public");
        url.searchParams.set(
          "RemoteIndicator",
          remoteOnly ? "True" : "False",
        );

        const fetchPromise = fetch(url.toString(), {
          method: "GET",
          headers: {
            Host: "data.usajobs.gov",
            "User-Agent": userAgentEmail,
            "Authorization-Key": apiKey,
            Accept: "application/json",
          },
          next: { revalidate: 300 },
          signal: controller.signal,
        });

        const hardTimeout = new Promise<never>((_, reject) => {
          setTimeout(
            () =>
              reject(
                new Error(
                  `USAJobs request timed out after ${timeoutMs}ms`,
                ),
              ),
            timeoutMs,
          );
        });

        const res = await Promise.race([fetchPromise, hardTimeout]);
        if (!res.ok) throw new Error(`USAJobs fetch failed: ${res.status}`);

        const json = (await res.json()) as {
          SearchResult?: { SearchResultItems?: USAJobsItem[] };
        };

        const items = Array.isArray(json.SearchResult?.SearchResultItems)
          ? json.SearchResult!.SearchResultItems!
          : [];

        return items
          .map((item) => {
            const d = item.MatchedObjectDescriptor ?? {};
            const id = item.MatchedObjectId ?? `${d.PositionURI ?? ""}`;
            const title = d.PositionTitle ?? "";
            const company = d.OrganizationName ?? "";
            const location = d.PositionLocationDisplay ?? "United States";
            const description =
              d.PositionFormattedDescription?.[0]?.Content ??
              d.QualificationSummary ??
              "";
            const urlLink = d.ApplyURI?.[0] ?? d.PositionURI ?? "#";

            const job: Job = {
              id: String(id),
              title,
              company,
              location,
              // USAJobs "Full" descriptions are often long; strip HTML and trim payload.
              description: trimText(stripHtml(description), 600),
              url: urlLink,
              source: SOURCE,
            };

            return job;
          })
          .filter((j) => j.title && j.company && j.url);
      } catch (e) {
        const message = e instanceof Error ? e.message : "USAJobs fetch failed";
        throw new Error(`USAJobs request failed: ${message}`);
      } finally {
        clearTimeout(timeout);
        controller.abort();
      }
    }

    const keywordLower = keyword.toLowerCase();
    const wantsReact = /react/.test(keywordLower);
    const wantsNode = /node/.test(keywordLower);

    // 1) Exact keyword first.
    let results = await fetchOnce(keyword);

    // 2) If too narrow (common for "reactjs nodejs developer"), retry broader skill terms.
    if (results.length === 0 && wantsReact && wantsNode) {
      const [r1, r2] = await Promise.allSettled([
        fetchOnce("software engineer"),
        fetchOnce("software developer"),
      ]);

      const merged = [
        r1.status === "fulfilled" ? r1.value : [],
        r2.status === "fulfilled" ? r2.value : [],
      ].flat();

      const byId = new Map<string, Job>();
      for (const j of merged) byId.set(j.id, j);
      results = Array.from(byId.values());
    }

    // 3) Final broad fallback.
    if (results.length === 0) {
      try {
        results = await fetchOnce("software engineer");
      } catch {
        // Keep empty results; UI will render an empty state.
      }
    }

    return results;
  });
}
