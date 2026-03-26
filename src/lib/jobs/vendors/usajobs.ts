import type { Job, JobSource } from "../types";

import { withTTLCache } from "../cache";

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
    const url = new URL("https://data.usajobs.gov/api/Search");
    url.searchParams.set("Keyword", keyword);
    url.searchParams.set("ResultsPerPage", String(limit));
    url.searchParams.set("Fields", "Full");
    url.searchParams.set("WhoMayApply", "public");
    url.searchParams.set("RemoteIndicator", remoteOnly ? "True" : "False");

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Host: "data.usajobs.gov",
        "User-Agent": userAgentEmail,
        "Authorization-Key": apiKey,
        Accept: "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`USAJobs fetch failed: ${res.status}`);
    }

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
          description,
          url: urlLink,
          source: SOURCE,
        };

        return job;
      })
      .filter((j) => j.title && j.company && j.url);
  });
}
