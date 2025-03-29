import { get } from "@/lib/utils/fetcher";
import type { PostsResponse, SuccessResponse, User } from "@/types";
import HeaderNavigation from "./presentational";

export default async function HeaderNavigationContainer({
  promise,
}: { promise: Promise<{ id: string }> }) {
  const userId = (await promise).id;
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/:user_id",
    pathParams: { user_id: userId },
  });
  const { data: posts } = await get<SuccessResponse<PostsResponse>>({
    url: "/api/users/:user_id/posts",
    pathParams: { user_id: userId },
  });
  return <HeaderNavigation name={user.name} postCount={posts.data.length} />;
}
