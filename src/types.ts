type Count = number;

interface Followers {
  totalCount: Count;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  followers: Followers;
}
