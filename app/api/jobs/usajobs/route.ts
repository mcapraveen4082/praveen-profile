import { NextResponse } from "next/server";

import { fetchUSAJobs } from "../../../../src/lib/jobs/vendors/usajobs";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const keyword = url.searchParams.get('keyword') ?? 'software engineer';
    const remoteOnly = (url.searchParams.get('remoteOnly') ?? 'true') === 'true';
    const jobs = await fetchUSAJobs({
      limit: 24,
      keyword,
      remoteOnly,
    });
    return NextResponse.json({ jobs });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load USAJobs";
    return NextResponse.json({ jobs: [], error: message });
  }
}
