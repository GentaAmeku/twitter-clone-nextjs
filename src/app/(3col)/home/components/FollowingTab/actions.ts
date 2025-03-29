"use server";

import { get } from "@/lib/utils/fetcher";
import type { PostsResponse, SuccessResponse, User } from "@/types";

export const fetchFollowersPost = async (path: string) => {
  const queryString = path.split("?")[1] || "";
  const params = new URLSearchParams(queryString);
  const cursor = params.get("cursor") || "";
  const limit = params.get("limit") as string;
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/me",
  });

  const { data: response } = await get<SuccessResponse<PostsResponse>>({
    url: "/api/users/:user_id/followers/posts",
    queryParams: { cursor, limit },
    pathParams: { user_id: user.user_id },
  });

  return response;
};
