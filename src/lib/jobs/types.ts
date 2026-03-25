export type JobSource = 'remotive' | 'adzuna' | 'usajobs';

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  url: string;
  source: JobSource;
};

export type VendorJobsResponse = {
  jobs: Job[];
  error?: string;
};

