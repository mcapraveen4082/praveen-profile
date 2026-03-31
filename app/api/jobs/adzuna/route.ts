import { NextResponse } from 'next/server';

import { fetchAdzunaJobs } from '../../../../src/lib/jobs/vendors/adzuna';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const keyword = url.searchParams.get('keyword') ?? 'software engineer';
    const remoteOnly = (url.searchParams.get('remoteOnly') ?? 'true') === 'true';
    const jobs = await fetchAdzunaJobs({
      limit: 24,
      // Don't force `where=remote`; instead rely on the client-side `remoteMatch()`
      // heuristic using the job's `location` text.
      where: undefined,
      what: keyword,
    });
    return NextResponse.json({ jobs });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to load Adzuna jobs';
    return NextResponse.json({ jobs: [], error: message });
  }
}

