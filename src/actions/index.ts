import { GitHubRepo, GitHubUserBio } from '../types/github';
import { GIT_REPO, GIT_USER } from '../constants/index';

export type GetUserGitAction = {
  type: typeof GIT_USER;
  payload: GitHubUserBio;
};

export type GetRepoAction = {
  type: typeof GIT_REPO;
  payload: GitHubRepo[];
};

export function getUserGit(payload: GitHubUserBio): GetUserGitAction {
  return { type: GIT_USER, payload };
}

export function getRepo(payload: GitHubRepo[]): GetRepoAction {
  return { type: GIT_REPO, payload };
}

