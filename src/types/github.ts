export type GitHubOwner = {
  id: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  language?: string | null;
  size?: number;
  updated_at: string;
  clone_url?: string;
  ssh_url?: string;
  html_url?: string;
  description?: string | null;
  homepage?: string | null;
  owner: GitHubOwner;
};

export type GitHubUserBio = {
  name?: string | null;
  login?: string | null;
  bio?: string | null;
  company?: string | null;
  location?: string | null;
  avatar_url?: string | null;
  html_url?: string | null;
  blog?: string | null;
  public_repos?: number;
  followers?: number;
  following?: number;
};

