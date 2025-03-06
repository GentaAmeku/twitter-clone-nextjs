"use client";

import { PostsTab as Tab } from "@/app/(3col)/[id]/_components/ProfileTabs/components/Tabs";
import PostList from "@/app/(3col)/_components/PostList";
import type { PostsResponse } from "@/types";
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
    <Tab>
      <PostList getKey={getMyPostsKey(userId)} action={fetchMyPost} />
    </Tab>
  );
}
