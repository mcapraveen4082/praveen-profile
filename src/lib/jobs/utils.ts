import type { Job, JobSource } from './types';

export function trimText(value: string, maxLen: number): string {
  const v = (value ?? '').toString().replace(/\s+/g, ' ').trim();
  if (v.length <= maxLen) return v;
  return `${v.slice(0, maxLen - 1)}…`;
}

export function stripHtml(value: string): string {
  return (value ?? '').toString().replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function jobKey(job: Pick<Job, 'title' | 'company'>): string {
  return `${job.title}__${job.company}`.toLowerCase().trim();
}

export function dedupeJobs(jobs: Job[]): Job[] {
  const seen = new Set<string>();
  const out: Job[] = [];
  for (const job of jobs) {
    const key = jobKey(job);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(job);
  }
  return out;
}

export function badgeColor(source: JobSource): string {
  switch (source) {
    case 'remotive':
      return 'bg-indigo-50 text-indigo-700 border-indigo-100';
    case 'adzuna':
      return 'bg-sky-50 text-sky-700 border-sky-100';
    case 'usajobs':
      return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-100';
  }
}

