"use server";

import { get } from "@/lib/utils/fetcher";
import type { User } from "@/types";
import ProfileButton from "./presentational";

export default async function ProfileButtonContainer() {
  const debugUser = await get<User>({ url: "/api/users/me" });
  return <ProfileButton name={debugUser.name} userId={debugUser.user_id} />;
}
