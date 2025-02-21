"use server";

import type { PostWithUser } from "@/app/_types";
import PostList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function PostListContainer() {
  const initialPosts = (await fetch(
    `${process.env.API_SERVER_URL}/api/posts?${new URLSearchParams({
      limit: INITIAL_NUMBER_OF_USERS.toString(),
    })}`,
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
