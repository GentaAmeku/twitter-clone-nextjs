"use server";

import { get } from "@/app/_lib/utils/fetcher";
import type { GetPostResponse } from "@/app/api/posts/route";

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
