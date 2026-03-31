import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';

import type { GitHubRepo, GitHubUserBio } from '../types/github';
import { getUserGit, getRepo } from '../actions/index';

import Repository from './Repository';

type GithubProfileState = {
  repos: GitHubRepo[];
  loading: boolean;
  error: string;
};

type ReduxProps = {
  user_bio: GitHubUserBio;
  user_repo: GitHubRepo[];
  getUserGit: (data: GitHubUserBio) => void;
  getRepo: (data: GitHubRepo[]) => void;
};

class GithubProfile extends Component<ReduxProps, GithubProfileState> {
  constructor(props: ReduxProps) {
    super(props);
    this.state = {
      repos: [],
      loading: true,
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const safeRepos = Array.isArray(this.props.user_repo) ? this.props.user_repo : [];
    const value = event.target.value.toLowerCase();
    const result = safeRepos.filter((data) => (data.name.toLowerCase()).includes(value));
    this.setState({ repos: result });
  }

  async componentDidMount() {
    this.setState({ loading: true, error: '' });
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/mcapraveen4082'),
        fetch('https://api.github.com/users/mcapraveen4082/repos?sort=updated&per_page=100'),
      ]);

      const profileJson = await profileRes.json();
      const reposJson = await reposRes.json();

      const safeProfile: GitHubUserBio =
        profileJson && !profileJson.message
          ? (profileJson as GitHubUserBio)
          : {};
      const safeRepos: GitHubRepo[] = Array.isArray(reposJson) ? (reposJson as GitHubRepo[]) : [];

      this.props.getUserGit(safeProfile);
      this.props.getRepo(safeRepos);
      this.setState({ repos: safeRepos });

      if (!profileRes.ok || !reposRes.ok) {
        this.setState({
          error: 'Could not fully load GitHub data right now. Please try again shortly.',
        });
      }
    } catch {
      this.setState({ error: 'Network issue while loading GitHub data.' });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="min-h-screen bg-transparent text-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-4">
          {!this.state.loading ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
              <aside className="rounded-2xl bg-white/90 border border-white/20 shadow-sm p-6">
                <div className="flex flex-col items-center">
                  <div className="w-48 rounded-full border-4 border-white shadow-md overflow-hidden">
                    <img
                      src={
                        this.props.user_bio.avatar_url ||
                        'https://avatars.githubusercontent.com/u/9919?s=200&v=4'
                      }
                      alt="GitHub avatar"
                      className="h-48 w-48 object-cover"
                    />
                  </div>
                  <h4 className="mt-5 text-xl font-extrabold text-slate-900">
                    {this.props.user_bio.name || 'Praveen Kumar'}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {this.props.user_bio.login || 'mcapraveen4082'}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-center">
                    {this.props.user_bio.bio ||
                      'Senior fullstack engineer building reliable production applications.'}
                  </p>

                  <a
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                    href={this.props.user_bio.html_url || 'https://github.com/mcapraveen4082'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open GitHub Profile
                  </a>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <i className="fa fa-users text-slate-700" aria-hidden="true"></i>
                    <span className="text-sm font-semibold text-slate-700">
                      {this.props.user_bio.company || 'Company not listed'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa fa-map-marker text-slate-700" aria-hidden="true"></i>
                    <span className="text-sm font-semibold text-slate-700">
                      {this.props.user_bio.location || 'Bengaluru, India'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa fa-envelope-o text-slate-700" aria-hidden="true"></i>
                    <a className="text-sm font-semibold text-indigo-700 hover:underline" href="mailto:mca.praveen4082@gmail.com">
                      mca.praveen4082@gmail.com
                    </a>
                  </div>

                  {this.props.user_bio.blog ? (
                    <div className="flex items-center gap-3">
                      <i className="fa fa-link text-slate-700" aria-hidden="true"></i>
                      <a
                        className="text-sm font-semibold text-indigo-700 hover:underline"
                        href={this.props.user_bio.blog}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                    <div className="text-base font-extrabold text-slate-900">
                      {this.props.user_bio.public_repos || 0}
                    </div>
                    <div className="text-xs font-semibold text-slate-600">Repos</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                    <div className="text-base font-extrabold text-slate-900">
                      {this.props.user_bio.followers || 0}
                    </div>
                    <div className="text-xs font-semibold text-slate-600">Followers</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                    <div className="text-base font-extrabold text-slate-900">
                      {this.props.user_bio.following || 0}
                    </div>
                    <div className="text-xs font-semibold text-slate-600">Following</div>
                  </div>
                </div>
              </aside>

              <main className="rounded-2xl bg-white/90 border border-white/20 shadow-sm p-6">
                <div className="flex flex-wrap items-center gap-6 border-b border-slate-200 pb-3">
                  <div className="text-sm font-semibold text-slate-600">Overview</div>
                  <div className="text-sm font-extrabold text-slate-900 border-b-2 border-indigo-600 pb-2">
                    Repositories
                  </div>
                  <div className="text-sm font-semibold text-slate-600">Stars</div>
                  <div className="text-sm font-semibold text-slate-600">Followers</div>
                  <div className="text-sm font-semibold text-slate-600">Following</div>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Search Repositories..."
                    className="w-full sm:w-[52%] rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                  >
                    <i className="fa fa-book" aria-hidden="true"></i>&nbsp; New
                  </button>
                </div>

                {this.state.error ? (
                  <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                    {this.state.error}
                  </div>
                ) : null}

                <p className="mt-4 text-sm font-semibold text-slate-700">
                  Showing {this.state.repos.length} repositories
                </p>

                <div className="mt-4 space-y-4">
                  {this.state.repos.map((repo) => (
                    <Repository data={repo} key={repo.id} />
                  ))}
                </div>
              </main>
            </div>
          ) : (
            <div className="rounded-2xl bg-white/90 border border-white/20 shadow-sm p-10">
              <div className="text-center text-slate-800 font-bold">Loading GitHub profile...</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    user_bio: state.user_bio,
    user_repo: state.user_repo,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getUserGit: (data: GitHubUserBio) => dispatch(getUserGit(data)),
  getRepo: (data: GitHubRepo[]) => dispatch(getRepo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubProfile);

