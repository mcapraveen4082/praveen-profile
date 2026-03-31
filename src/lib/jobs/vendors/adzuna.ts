import type { Job, JobSource } from "../types";

import { withTTLCache } from "../cache";
import { stripHtml, trimText } from "../utils";

const SOURCE: JobSource = "adzuna";

type AdzunaJob = {
  id: string | number;
  title?: string;
  company?: { display_name?: string } | string;
  location?: { display_name?: string } | string;
  description?: string;
  redirect_url?: string;
  created?: string;
};

export async function fetchAdzunaJobs(opts?: {
  limit?: number;
  what?: string;
  where?: string;
}): Promise<Job[]> {
  const limit = opts?.limit ?? 25;
  const what = opts?.what ?? "software engineer";
  const where = opts?.where; // undefined means "no workplace/location filter"

  const appId = "4939a9bb";
  const appKey = "0786df649264cbeb65ffb0ddac4bfe0b";
  // Adzuna has multiple country feeds; "us" tends to include more remote-tech postings.
  const country = "us";

  if (!appId || !appKey) {
    throw new Error(
      "Adzuna API not configured (missing ADZUNA_APP_ID / ADZUNA_API_KEY).",
    );
  }

  const cacheKey = `adzuna:${country}:${limit}:${what}:${where ?? "any"}`;

  return withTTLCache(cacheKey, 10 * 60 * 1000, async () => {
    const timeoutMs = 8000;

    async function fetchOnce(whatQuery: string) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      const url = new URL(`https://api.adzuna.com/v1/api/jobs/${country}/search/1`);
      url.searchParams.set("app_id", appId);
      url.searchParams.set("app_key", appKey);
      url.searchParams.set("what", whatQuery);
      if (where) url.searchParams.set("where", where);
      url.searchParams.set("results_per_page", String(limit));
      url.searchParams.set("content-type", "application/json");

      try {
        const fetchPromise = fetch(url.toString(), {
          next: { revalidate: 300 },
          signal: controller.signal,
        });

        const hardTimeout = new Promise<never>((_, reject) => {
          setTimeout(
            () => reject(new Error(`Adzuna request timed out after ${timeoutMs}ms`)),
            timeoutMs,
          );
        });

        const res = await Promise.race([fetchPromise, hardTimeout]);
        if (!res.ok) throw new Error(`Adzuna fetch failed: ${res.status}`);

        const json = (await res.json()) as { results?: AdzunaJob[] };
        const results = Array.isArray(json.results) ? json.results : [];

        return results.map((j) => ({
          id: String(j.id),
          title: j.title ?? "",
          company:
            typeof j.company === "string"
              ? j.company
              : (j.company?.display_name ?? ""),
          location:
            typeof j.location === "string"
              ? j.location
              : (j.location?.display_name ?? "Remote"),
          // Normalize + trim long HTML so client stays fast.
          description: trimText(stripHtml(j.description ?? ""), 600),
          url: j.redirect_url ?? "#",
          source: SOURCE,
        }));
      } catch (e) {
        const message = e instanceof Error ? e.message : "Adzuna fetch failed";
        throw new Error(`Adzuna request failed: ${message}`);
      } finally {
        clearTimeout(timeout);
        controller.abort();
      }
    }

    const wantsReact = /react/.test(what.toLowerCase());
    const wantsNode = /node/.test(what.toLowerCase());

    // 1) Try the exact query first.
    let results = await fetchOnce(what);

    // 2) If it's too narrow (common for "reactjs nodejs developer"), try split keywords.
    if (results.length === 0 && wantsReact && wantsNode) {
      const [reactSettled, nodeSettled] = await Promise.allSettled([
        fetchOnce("reactjs"),
        fetchOnce("nodejs"),
      ]);

      const merged = [
        reactSettled.status === "fulfilled" ? reactSettled.value : [],
        nodeSettled.status === "fulfilled" ? nodeSettled.value : [],
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
        // If even the fallback fails, keep current (empty) results and let the UI show the empty state.
      }
    }

    return results;
  });
}
