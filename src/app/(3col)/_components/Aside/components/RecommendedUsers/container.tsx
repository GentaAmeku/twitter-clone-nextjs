"use server";

import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
import RecommendedUsers from "./presentational";

const INITIAL_NUMBER_OF_USERS = 3;

export default async function RecommendedUsersContainer() {
  const { data: users } = await get<SuccessResponse<User[]>>({
    url: "/api/users",
    queryParams: { limit: INITIAL_NUMBER_OF_USERS },
  });

  return <RecommendedUsers users={users} />;
}
