import type { Job, JobSource } from "../types";

import { withTTLCache } from "../cache";

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
  const where = opts?.where ?? "remote";

  const appId = "4939a9bb";
  const appKey = "0786df649264cbeb65ffb0ddac4bfe0b";
  const country = "in";

  if (!appId || !appKey) {
    throw new Error(
      "Adzuna API not configured (missing ADZUNA_APP_ID / ADZUNA_API_KEY).",
    );
  }

  const cacheKey = `adzuna:${country}:${limit}:${what}:${where}`;

  return withTTLCache(cacheKey, 10 * 60 * 1000, async () => {
    const url = new URL(
      `https://api.adzuna.com/v1/api/jobs/${country}/search/1`,
    );
    url.searchParams.set("app_id", appId);
    url.searchParams.set("app_key", appKey);
    url.searchParams.set("what", what);
    url.searchParams.set("where", where);
    url.searchParams.set("results_per_page", String(limit));
    url.searchParams.set("content-type", "application/json");

    const res = await fetch(url.toString(), {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Adzuna fetch failed: ${res.status}`);
    }

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
      description: j.description ?? "",
      url: j.redirect_url ?? "#",
      source: SOURCE,
    }));
  });
}
