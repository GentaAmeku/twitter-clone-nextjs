"use server";

import type { Post } from "@/app/_types";
import PostList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function PostListContainer() {
  const initialPosts = (await fetch(
    `${process.env.API_SERVER_URL}/api/posts?${new URLSearchParams({
      limit: INITIAL_NUMBER_OF_USERS.toString(),
    })}`,
  ).then((res) => res.json())) as Post[];

  return (
    <PostList
      initialOffset={INITIAL_NUMBER_OF_USERS}
      initialPosts={initialPosts}
    />
  );
}
