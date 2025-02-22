"use server";

import { LOGIN_USER_ID } from "@/app/_constants";
import type { Post } from "@/app/_types";

export const fetchPost = async (offset: number, perPage: number) => {
  const params = {
    offset: offset.toString(),
    limit: perPage.toString(),
  };
  const posts = (await fetch(
    `${process.env.API_SERVER_URL}/api/users/${LOGIN_USER_ID}/followers/posts?${new URLSearchParams(params)}`,
  ).then((res) => res.json())) as Post[];

  return { data: posts, next: posts.length > 0 };
};
