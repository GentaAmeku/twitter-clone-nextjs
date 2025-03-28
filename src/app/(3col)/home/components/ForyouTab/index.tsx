"use client";

import PostList from "@/app/(3col)/components/PostList";
import TabPanel from "@/app/(3col)/components/Tabs/Panel";
import PostInputForm from "@/app/(3col)/home/components/PostInputForm";
import type { PostsResponse, User } from "@/types";
import { TAB_FOR_YOU } from "../../data";
import { fetchPost } from "./actions";

type ForyouTabProps = {
  user: User;
};

const getPostKey = (pageIndex: number, previousPageData: PostsResponse) => {
  if (previousPageData && !previousPageData.has_next) return null;
  if (pageIndex === 0) return "/api/posts?limit=10";
  return `/api/posts?cursor=${previousPageData.next_cursor}&limit=${10}`;
};

export default function ForyouTab({ user }: ForyouTabProps) {
  return (
    <TabPanel value={TAB_FOR_YOU}>
      <PostInputForm user={user} />
      <PostList getKey={getPostKey} action={fetchPost} />
    </TabPanel>
  );
}
