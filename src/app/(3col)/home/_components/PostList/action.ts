"use server";

import type { GetPostResponse } from "@/app/api/posts/route";
import { get } from "@/lib/utils/fetcher";

export const fetchPost = async (path: string) => {
  const queryString = path.split("?")[1] || ""; // クエリ部分を取得
  const params = new URLSearchParams(queryString);
  const cursor = params.get("cursor") || "";
  const limit = params.get("limit") as string;

  console.log(params, params.get("limit"));

  const response = await get<GetPostResponse>({
    url: "/api/posts",
    queryParams: { cursor, limit },
  });

  return response;
};
