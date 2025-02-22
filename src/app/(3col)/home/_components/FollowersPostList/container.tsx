"use server";

import { LOGIN_USER_ID } from "@/app/_constants";
import type { PostWithUser } from "@/app/_types";
import PostList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function FollowersPostListContainer() {
  const initialPosts = (await fetch(
    `${process.env.API_SERVER_URL}/api/users/${LOGIN_USER_ID}/followers/posts?${new URLSearchParams(
      {
        limit: INITIAL_NUMBER_OF_USERS.toString(),
      },
    )}`,
  ).then((res) => res.json())) as PostWithUser[];

  // debug
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <PostList
      initialOffset={INITIAL_NUMBER_OF_USERS}
      initialPosts={initialPosts}
    />
  );
}
