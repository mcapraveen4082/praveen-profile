import type { Job, JobSource } from "../types";

import { withTTLCache } from "../cache";

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
  const search = opts?.search
    ? `&search=${encodeURIComponent(opts.search)}`
    : "";

  const cacheKey = `remotive:${limit}:${opts?.search ?? ""}`;
  return withTTLCache(cacheKey, 24 * 60 * 1000, async () => {
    const res = await fetch(
      `https://remotive.com/api/remote-jobs?limit=${limit}${search}`,
      {
        // Use Next.js cache revalidation (server-side)
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      throw new Error(`Remotive fetch failed: ${res.status}`);
    }

    const json = (await res.json()) as { jobs?: RemotiveJob[] };
    const jobs = Array.isArray(json.jobs) ? json.jobs : [];

    return jobs.map((j) => ({
      id: String(j.id),
      title: j.title ?? "",
      company: j.company_name ?? "",
      location: j.candidate_required_location ?? "Remote",
      description: j.description ?? "",
      url: j.url ?? "#",
      source: SOURCE,
    }));
  });
}
