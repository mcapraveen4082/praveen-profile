import { GitHubRepo, GitHubUserBio } from '../types/github';
import { GIT_REPO, GIT_USER } from '../constants/index';
import type { GetRepoAction, GetUserGitAction } from '../actions/index';

const initialState: RootState = {
  user_bio: {} as GitHubUserBio,
  user_repo: [] as GitHubRepo[],
};

export type RootState = {
  user_bio: GitHubUserBio;
  user_repo: GitHubRepo[];
};

type RootAction = GetUserGitAction | GetRepoAction;

export default function rootReducer(
  state: RootState = initialState,
  action: RootAction,
): RootState {
  switch (action.type) {
    case GIT_USER:
      return { ...state, user_bio: action.payload };
    case GIT_REPO:
      return { ...state, user_repo: action.payload };
    default:
      return state;
  }
}

