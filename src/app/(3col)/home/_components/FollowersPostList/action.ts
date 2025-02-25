"use server";

import { LOGIN_USER_ID } from "@/app/_constants";
import { get } from "@/app/_lib/utils/fetcher";
import type { Post } from "@/app/_types";

export const fetchPost = async (offset: number, limit: number) => {
  const followersPosts = await get<Post[]>({
    url: "/api/users/:id/followers/posts",
    queryParams: { offset, limit },
    pathParams: { id: LOGIN_USER_ID },
  });

  return { data: followersPosts, next: followersPosts.length > 0 };
};