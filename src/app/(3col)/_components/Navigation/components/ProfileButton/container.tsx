import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
import ProfileButton from "./presentational";

export default async function ProfileButtonContainer() {
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/me",
  });
  return <ProfileButton name={user.name} userId={user.user_id} />;
}
