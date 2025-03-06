"use server";

import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
import ProfileHeader from "./presentational";

export default async function ProfileHeaderContainer({
  promise,
}: { promise: Promise<{ id: string }> }) {
  const userId = (await promise).id;
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/:user_id",
    pathParams: { user_id: userId },
  });
  return <ProfileHeader name={user.name} />;
}
