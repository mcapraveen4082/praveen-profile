import type { Job, JobSource } from "../types";

import { withTTLCache } from "../cache";
import { stripHtml, trimText } from "../utils";

const SOURCE: JobSource = "remotive";

type RemotiveJob = {
  id: number | string;
  url: string;
  title: string;
  company_name: string;
  candidate_required_location?: string;
  description?: string;
  publication_date?: string;
};

export async function fetchRemotiveJobs(opts?: {
  limit?: number;
  search?: string;
}): Promise<Job[]> {
  const limit = opts?.limit ?? 100;
  const rawSearch = opts?.search ?? '';

  const lower = rawSearch.toLowerCase();
  const searches: string[] = [];

  // Remotive search can be strict when multiple keywords are provided.
  // For "react + node", do two separate searches and merge.
  if (lower.includes('react')) searches.push('react');
  if (lower.includes('node')) searches.push('node');

  // Fallback: use provided search as-is.
  if (searches.length === 0 && rawSearch.trim()) searches.push(rawSearch.trim());
  if (searches.length === 0) searches.push('software engineer');

  // Split limit across multiple searches.
  const perSearchLimit = Math.max(10, Math.floor(limit / searches.length));

  const cacheKey = `remotive:${perSearchLimit}:${searches.join('|')}`;
  return withTTLCache(cacheKey, 24 * 60 * 1000, async () => {
    const results = await Promise.all(
      searches.map(async (s) => {
        const res = await fetch(
          `https://remotive.com/api/remote-jobs?limit=${perSearchLimit}&search=${encodeURIComponent(s)}`,
          {
            // Use Next.js cache revalidation (server-side)
            next: { revalidate: 300 },
          },
        );

        if (!res.ok) {
          throw new Error(`Remotive fetch failed: ${res.status} (${s})`);
        }

        const json = (await res.json()) as { jobs?: RemotiveJob[] };
        const jobs = Array.isArray(json.jobs) ? json.jobs : [];
        return jobs.map((j) => ({
          id: String(j.id),
          title: j.title ?? "",
          company: j.company_name ?? "",
          location: j.candidate_required_location ?? "Remote",
          // Remotive returns large HTML descriptions; normalize + trim to keep payload smaller.
          description: trimText(stripHtml(j.description ?? ''), 600),
          url: j.url ?? '#',
          source: SOURCE,
        }));
      }),
    );

    // Merge + dedupe by id.
    const merged = results.flat();
    const seen = new Set<string>();
    const out: Job[] = [];
    for (const job of merged) {
      if (seen.has(job.id)) continue;
      seen.add(job.id);
      out.push(job);
    }
    return out;
  });
}
