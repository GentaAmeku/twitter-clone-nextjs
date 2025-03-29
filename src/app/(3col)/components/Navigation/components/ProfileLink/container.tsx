"use server";

import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
import ProfileLink from "./presentational";

export default async function ProfileLinkContainer() {
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/me",
  });
  return <ProfileLink userId={user.user_id} />;
}
