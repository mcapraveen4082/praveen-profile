'use client';

import React, { useEffect, useMemo, useState } from 'react';

import type { Job, JobSource } from '../../src/lib/jobs/types';
import { badgeColor, dedupeJobs, stripHtml, trimText } from '../../src/lib/jobs/utils';

type TabId = 'all' | JobSource;

const TABS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All Jobs' },
  { id: 'remotive', label: 'Remotive' },
  { id: 'adzuna', label: 'Adzuna' },
  { id: 'usajobs', label: 'USAJobs' },
];

function remoteMatch(job: Job): boolean {
  const loc = (job.location ?? '').toLowerCase();
  return loc.includes('remote') || loc.includes('worldwide');
}

function JobCard({ job }: { job: Job }) {
  const description = trimText(stripHtml(job.description), 160);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-extrabold text-slate-900">
            {job.title || 'Untitled role'}
          </h3>
          <p className="mt-1 text-sm font-bold text-slate-700">{job.company || 'Unknown company'}</p>
          <p className="mt-1 text-sm text-slate-600">{job.location || 'Location not provided'}</p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-extrabold ${badgeColor(job.source)}`}
          title={`Source: ${job.source}`}
        >
          {job.source === 'remotive' ? 'Remotive' : job.source === 'adzuna' ? 'Adzuna' : 'USAJobs'}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

      <div className="mt-4 flex justify-end">
        <a
          href={job.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 transition-colors"
        >
          Apply
        </a>
      </div>
    </article>
  );
}

function JobSkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm animate-pulse">
      <div className="h-4 w-2/3 rounded bg-slate-200" />
      <div className="mt-3 h-4 w-1/2 rounded bg-slate-200" />
      <div className="mt-3 h-4 w-full rounded bg-slate-200" />
      <div className="mt-4 h-4 w-5/6 rounded bg-slate-200" />
      <div className="mt-4 h-10 w-24 rounded-xl bg-slate-200" />
    </div>
  );
}

export default function JobsClient() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [keyword, setKeyword] = useState('typescript react node');

  const [jobsBySource, setJobsBySource] = useState<Record<JobSource, Job[]>>({
    remotive: [],
    adzuna: [],
    usajobs: [],
  });

  const [errors, setErrors] = useState<Partial<Record<JobSource, string>>>({});
  const [loading, setLoading] = useState<Record<JobSource, boolean>>({
    remotive: true,
    adzuna: true,
    usajobs: true,
  });

  useEffect(() => {
    let alive = true;

    async function loadVendor(source: JobSource) {
      const endpoint =
        source === 'remotive'
          ? `/api/jobs/remotive?keyword=${encodeURIComponent(keyword)}`
          : source === 'adzuna'
            ? `/api/jobs/adzuna?keyword=${encodeURIComponent(keyword)}`
            : `/api/jobs/usajobs?keyword=${encodeURIComponent(keyword)}`;

      try {
        setLoading((prev) => ({ ...prev, [source]: true }));
        setErrors((prev) => ({ ...prev, [source]: '' }));
        const res = await fetch(endpoint, { method: 'GET' });
        const json = (await res.json()) as { jobs?: Job[]; error?: string };
        if (!alive) return;

        if (json.error) {
          setErrors((prev) => ({ ...prev, [source]: json.error ?? 'Failed to load jobs' }));
        }

        setJobsBySource((prev) => ({ ...prev, [source]: Array.isArray(json.jobs) ? json.jobs : [] }));
      } catch (e) {
        if (!alive) return;
        const message = e instanceof Error ? e.message : 'Failed to load jobs';
        setErrors((prev) => ({ ...prev, [source]: message }));
        setJobsBySource((prev) => ({ ...prev, [source]: [] }));
      } finally {
        if (!alive) return;
        setLoading((prev) => ({ ...prev, [source]: false }));
      }
    }

    Promise.allSettled([
      loadVendor('remotive'),
      loadVendor('adzuna'),
      loadVendor('usajobs'),
    ]);

    return () => {
      alive = false;
    };
  }, [keyword]);

  const allJobs = useMemo(() => {
    const merged = Object.values(jobsBySource).flat();
    const deduped = dedupeJobs(merged);
    const filtered = remoteOnly ? deduped.filter(remoteMatch) : deduped;

    // Best-effort "newest first": sort by id descending (vendor-specific ids).
    return filtered.sort((a, b) => b.id.localeCompare(a.id));
  }, [jobsBySource, remoteOnly]);

  const visibleJobs = useMemo(() => {
    if (activeTab === 'all') return allJobs;
    const jobs = jobsBySource[activeTab];
    return remoteOnly ? jobs.filter(remoteMatch) : jobs;
  }, [activeTab, allJobs, jobsBySource, remoteOnly]);

  const isLoadingForTab = useMemo(() => {
    if (activeTab === 'all') return loading.remotive || loading.adzuna || loading.usajobs;
    return loading[activeTab];
  }, [activeTab, loading]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Jobs</h1>
              <p className="mt-2 text-sm text-slate-300">
                Aggregated roles across multiple free sources with separate vendor tabs.
              </p>
            </div>

            <label className="flex items-center gap-3 text-sm font-semibold text-slate-200 select-none">
              <input
                type="checkbox"
                checked={remoteOnly}
                onChange={(e) => setRemoteOnly(e.target.checked)}
                className="h-4 w-4 accent-indigo-600"
              />
              Remote only
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="text-sm font-semibold text-slate-200" htmlFor="job-keyword">
              Skills / keyword
            </label>
            <input
              id="job-keyword"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. typescript react node"
              className="w-full sm:max-w-xl rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {TABS.map((t) => {
              const active = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={[
                    'rounded-full border px-4 py-2 text-sm font-extrabold transition-colors',
                    active
                      ? 'bg-indigo-600 border-indigo-500 text-white'
                      : 'bg-white/0 border-white/20 text-slate-200 hover:bg-white/10',
                  ].join(' ')}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {activeTab !== 'all' && errors[activeTab as JobSource] ? (
            <div className="mt-5 rounded-2xl border border-rose-200/30 bg-rose-50/10 px-4 py-3 text-sm font-semibold text-rose-200">
              {errors[activeTab as JobSource]}
            </div>
          ) : null}

          {isLoadingForTab ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, idx) => (
                <JobSkeletonCard key={idx} />
              ))}
            </div>
          ) : visibleJobs.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center">
              <p className="text-sm font-semibold text-slate-300">No jobs found.</p>
              <p className="mt-2 text-xs text-slate-400">
                Try switching vendors or disabling “Remote only”.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleJobs.map((job) => (
                <JobCard key={`${job.source}:${job.id}`} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

