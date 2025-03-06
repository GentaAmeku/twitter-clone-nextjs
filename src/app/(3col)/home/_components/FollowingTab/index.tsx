"use client";

import PostList from "@/app/(3col)/_components/PostList";
import PostInputForm from "@/app/(3col)/home/_components/PostInputForm";
import { FollowingTab as Tab } from "@/app/(3col)/home/_components/Tabs";
import type { PostsResponse, User } from "@/types";
import { fetchFollowersPost } from "./actions";

type FollowingTabProps = {
  user: User;
};

const getFollowersPostKey = (
  pageIndex: number,
  previousPageData: PostsResponse,
) => {
  if (previousPageData && !previousPageData.has_next) return null;
  if (pageIndex === 0) return "/api/users/:user_id/followers/posts?limit=10";
  return `/api/users/:user_id/followers/posts?cursor=${previousPageData.next_cursor}&limit=${10}`;
};

export default function FollowingTab({ user }: FollowingTabProps) {
  return (
    <Tab>
      <PostInputForm user={user} />
      <PostList getKey={getFollowersPostKey} action={fetchFollowersPost} />
    </Tab>
  );
}
