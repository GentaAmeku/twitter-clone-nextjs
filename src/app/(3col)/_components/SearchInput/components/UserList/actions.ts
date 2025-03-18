"use server";

import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";

export const fetchUsers = async (path: string) => {
  const queryString = path.split("?")[1] || "";
  const params = new URLSearchParams(queryString);
  const search = params.get("search") || "";
  const limit = params.get("limit") as string;

  const { data: users } = await get<SuccessResponse<User[]>>({
    url: "/api/users",
    queryParams: { search, limit },
  });

  return users;
};
