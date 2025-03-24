import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
import ProfileBody from "./presentational";

export default async function ProfileBodyContainer({
  promise,
}: { promise: Promise<{ id: string }> }) {
  const userId = (await promise).id;
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/:user_id",
    pathParams: { user_id: userId },
  });
  return (
    <ProfileBody
      name={user.name}
      user_id={user.user_id}
      profile={user.profile}
      created_at={user.created_at}
      followers={user.followers}
      following={user.following}
    />
  );
}
