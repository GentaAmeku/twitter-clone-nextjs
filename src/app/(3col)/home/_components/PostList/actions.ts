"use server";

import { get } from "@/lib/utils/fetcher";
import type { PostsResponse } from "@/types";

export const fetchPost = async (path: string) => {
  const queryString = path.split("?")[1] || "";
  const params = new URLSearchParams(queryString);
  const cursor = params.get("cursor") || "";
  const limit = params.get("limit") as string;

  const response = await get<PostsResponse>({
    url: "/api/posts",
    queryParams: { cursor, limit },
  });

  return response;
};
