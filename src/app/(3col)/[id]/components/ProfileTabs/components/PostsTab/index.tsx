"use client";

import PostList from "@/app/(3col)/components/PostList";
import TabPanel from "@/app/(3col)/components/Tabs/Panel";
import type { PostsResponse } from "@/types";
import { TAB_POSTS } from "../../data";
import { fetchMyPost } from "./actions";

type PostsTabProps = {
  userId: string;
};

const getMyPostsKey =
  (userId: string) => (pageIndex: number, previousPageData: PostsResponse) => {
    if (previousPageData && !previousPageData.has_next) return null;
    if (pageIndex === 0) return `/api/users/${userId}/posts?limit=10`;
    return `/api/users/${userId}/posts?cursor=${previousPageData.next_cursor}&limit=${10}`;
  };

export default function PostsTab({ userId }: PostsTabProps) {
  return (
    <TabPanel value={TAB_POSTS}>
      <PostList getKey={getMyPostsKey(userId)} action={fetchMyPost} />
    </TabPanel>
  );
}
