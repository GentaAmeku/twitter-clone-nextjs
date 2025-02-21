import type { Dayjs } from "dayjs";

export type User = {
  id: string;
  name: string;
  user_id: string;
  created_at?: Date;
  email: string;
  password: string;
  following: [] | never[];
  followers: [] | never[];
};

export type Post = {
  id: string;
  text: string;
  reply: number;
  repost: number;
  hearts: number;
  views: number;
  time: Dayjs;
  user_id: string;
};
