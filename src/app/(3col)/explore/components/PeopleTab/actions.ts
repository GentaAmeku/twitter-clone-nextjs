"use server";

import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, UsersResponse } from "@/types";

export const fetchPostUsers = async (path: string) => {
  const queryString = path.split("?")[1] || "";
  const params = new URLSearchParams(queryString);
  const cursor = params.get("cursor") || "";
  const search = params.get("q") || "";
  const limit = params.get("limit") as string;

  const { data: response } = await get<SuccessResponse<UsersResponse>>({
    url: "/api/posts/users",
    queryParams: { cursor, search, limit },
    cache: "no-store",
  });

  return response;
};
