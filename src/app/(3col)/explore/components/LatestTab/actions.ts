"use server";

import { get } from "@/lib/utils/fetcher";
import type { PostsResponse, SuccessResponse } from "@/types";

export const fetchPost = async (path: string) => {
  const queryString = path.split("?")[1] || "";
  const params = new URLSearchParams(queryString);
  const cursor = params.get("cursor") || "";
  const q = params.get("q") || "";
  const limit = params.get("limit") as string;

  const { data: response } = await get<SuccessResponse<PostsResponse>>({
    url: "/api/posts/search",
    queryParams: { q, cursor, limit },
    cache: "no-store",
  });

  return response;
};
