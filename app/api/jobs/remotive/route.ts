import { NextResponse } from 'next/server';

import { fetchRemotiveJobs } from '../../../../src/lib/jobs/vendors/remotive';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const keyword = url.searchParams.get('keyword') ?? 'software engineer';
    const jobs = await fetchRemotiveJobs({ limit: 24, search: keyword });
    return NextResponse.json({ jobs });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to load Remotive jobs';
    return NextResponse.json({ jobs: [], error: message });
  }
}

