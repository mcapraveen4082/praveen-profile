/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

import type { GitHubRepo } from '../types/github';

type RepositoryProps = {
  data: GitHubRepo;
};

class Repository extends Component<RepositoryProps> {
  copyText = async (value: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const helperInput = document.createElement('textarea');
        helperInput.value = value;
        helperInput.style.position = 'fixed';
        helperInput.style.left = '-9999px';
        document.body.appendChild(helperInput);
        helperInput.focus();
        helperInput.select();
        document.execCommand('copy');
        document.body.removeChild(helperInput);
      }
      alert('Copied to clipboard');
    } catch {
      alert('Could not copy. Please copy manually.');
    }
  };

  render() {
    const { data } = this.props;
    const updatedDate = new Date(data.updated_at);
    const formattedDate = `${updatedDate.getDate()}/${updatedDate.getMonth() + 1}/${updatedDate.getFullYear()}`;

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-extrabold text-slate-900">
            <a href={data.html_url || '#'} target="_blank" rel="noreferrer" className="hover:underline">
              {data.name}
            </a>
          </p>
          {data.description ? <p className="text-sm leading-relaxed text-slate-600">{data.description}</p> : null}

          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-indigo-700">
              {data.language ? data.language : 'JavaScript'}
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="fa fa-code-fork text-slate-500" aria-hidden="true"></i>
              {data.size ?? 0} KB
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="fa fa-calendar text-slate-500" aria-hidden="true"></i>
              Updated {formattedDate}
            </span>
          </div>

          <div className="text-sm font-semibold text-slate-700">
            Clone URL:{' '}
            <a
              href={data.clone_url || '#'}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 hover:underline"
            >
              {data.clone_url}
            </a>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-wrap sm:justify-start">
            <button
              type="button"
              onClick={() => data.clone_url && this.copyText(data.clone_url)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Copy HTTPS
            </button>
            <button
              type="button"
              onClick={() => data.ssh_url && this.copyText(data.ssh_url)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Copy SSH
            </button>
            {data.homepage ? (
              <a
                href={data.homepage}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Repository;

