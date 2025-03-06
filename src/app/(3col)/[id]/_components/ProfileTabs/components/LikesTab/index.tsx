"use client";

import { LikesTab as Tab } from "@/app/(3col)/[id]/_components/ProfileTabs/components/Tabs";
import PostList from "@/app/(3col)/_components/PostList";
import type { PostsResponse } from "@/types";
import { fetchMyLikes } from "./actions";

type PostsTabProps = {
  userId: string;
};

const getMyLikesKey =
  (userId: string) => (pageIndex: number, previousPageData: PostsResponse) => {
    if (previousPageData && !previousPageData.has_next) return null;
    if (pageIndex === 0) return `/api/users/${userId}/posts?limit=10`;
    return `/api/users/${userId}/posts?cursor=${previousPageData.next_cursor}&limit=${10}`;
  };

export default function LikesTab({ userId }: PostsTabProps) {
  return (
    <Tab>
      <PostList getKey={getMyLikesKey(userId)} action={fetchMyLikes} />
    </Tab>
  );
}
