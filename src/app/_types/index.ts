import type { Dayjs } from "dayjs";

export type User = {
  id: string;
  name: string;
  user_id: string;
  created_at?: Date;
  email: string;
  password: string;
  following: User[] | never[];
  followers: User[] | never[];
};

export type Post = {
  id: string;
  text: string;
  reply: number;
  repost: number;
  hearts: number;
  views: number;
  time: Dayjs;
  fromNow: string;
  user_id: string;
};

export type PostWithUser = Post & {
  user?: User;
};

export type Group = "IT";

export type Trend = {
  id: string;
  name: string;
  query: string;
  group: Group;
  volume: number;
};
