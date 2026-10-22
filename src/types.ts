export type Seniority = "junior" | "senior";

export type Filter = "all" | Seniority;

export interface Member {
  id: number;
  name: string;
  title: string;
  quote: string;
  email: string;
  level: Seniority;
}

export interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    bs: string;
  };
}