type Count = number;

interface Followers {
  totalCount: Count;
}

interface Language {
  id: string;
  name: string;
  color: string;
}

interface Repository {
  id: string;
  name: string;
  createdAt: string;
  description: string;
  url: string;
  languages: Array<Language>;
  stargazerCount: Count;
  forkCount: Count;
}

export interface User {
  id: string;
  name: string;
  bio: string;
  createdAt: string;
  avatarUrl: string;
  email: string;
  followers: Followers;
  repositories: Record<string, Count | Array<Repository>>;
}
