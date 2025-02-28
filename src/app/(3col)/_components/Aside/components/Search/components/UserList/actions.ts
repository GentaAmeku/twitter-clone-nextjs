"use server";

import { get } from "@/lib/utils/fetcher";
import type { User } from "@/types";

export const fetchUsers = async (path: string) => {
  const queryString = path.split("?")[1] || "";
  const params = new URLSearchParams(queryString);
  const search = params.get("search") || "";
  const limit = params.get("limit") as string;

  const response = await get<User[]>({
    url: "/api/users",
    queryParams: { search, limit },
  });

  return response;
};
