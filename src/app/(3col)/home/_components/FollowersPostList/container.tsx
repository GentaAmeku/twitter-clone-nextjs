"use server";

import { LOGIN_USER_ID } from "@/app/_constants";
import { get } from "@/app/_lib/utils/fetcher";
import type { PostWithUser } from "@/app/_types";
import PostList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function FollowersPostListContainer() {
  const initialPosts = await get<PostWithUser[]>({
    url: "/api/users/:id/followers/posts",
    pathParams: { id: LOGIN_USER_ID },
    queryParams: { limit: INITIAL_NUMBER_OF_USERS },
  });

  // debug
  await new Promise((resolve) => setTimeout(resolve, 300));

  return (
    <PostList
      initialOffset={INITIAL_NUMBER_OF_USERS}
      initialPosts={initialPosts}
    />
  );
}
