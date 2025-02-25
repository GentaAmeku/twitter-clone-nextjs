"use server";

import { LOGIN_USER_ID } from "@/constants";
import { get } from "@/lib/utils/fetcher";
import type { Post } from "@/types";

export const fetchPost = async (offset: number, limit: number) => {
  const followersPosts = await get<Post[]>({
    url: "/api/users/:id/followers/posts",
    queryParams: { offset, limit },
    pathParams: { id: LOGIN_USER_ID },
  });

  return { data: followersPosts, next: followersPosts.length > 0 };
};
