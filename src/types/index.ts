import type { Dayjs } from "dayjs";

// types
export type User = {
  id: string;
  name: string;
  user_id: string;
  created_at: Dayjs;
  email: string;
  password: string;
  profile: string;
  following: User[] | never[];
  followers: User[] | never[];
  isLogin: boolean;
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

// response types
export type PostsResponse = {
  data: PostWithUser[];
  next_cursor: string;
  has_next: boolean;
};

export type UsersResponse = {
  data: User[];
  next_cursor: string;
  has_next: boolean;
};

export type PostResponse<T> = {
  data: T;
};

export type SuccessResponse<DataT> = {
  success: true;
  data: DataT;
};

export type ErrorResponse = {
  success: false;
  error: {
    message: string;
    code: string;
  };
};

export type ResponseData<DataT> = SuccessResponse<DataT> | ErrorResponse;
