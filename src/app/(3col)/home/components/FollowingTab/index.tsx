"use client";

import PostList from "@/app/(3col)/components/PostList";
import TabPanel from "@/app/(3col)/components/Tabs/Panel";
import PostInputForm from "@/app/(3col)/home/_components/PostInputForm";
import type { PostsResponse, User } from "@/types";
import { TAB_FOLLOWING } from "../../data";
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
    <TabPanel value={TAB_FOLLOWING}>
      <PostInputForm user={user} />
      <PostList getKey={getFollowersPostKey} action={fetchFollowersPost} />
    </TabPanel>
  );
}
