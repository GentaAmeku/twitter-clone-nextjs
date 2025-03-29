"use client";

import TabPanel from "@/app/(3col)/components/Tabs/Panel";
import { TAB_LATEST } from "../../data";

import PostList from "@/app/(3col)/components/PostList";
import type { PostsResponse } from "@/types";
import { useSearchParams } from "next/navigation";

import { fetchPost } from "./actions";

const getPostKey =
  (search: string) => (pageIndex: number, previousPageData: PostsResponse) => {
    if (previousPageData && !previousPageData.has_next) return null;
    if (pageIndex === 0) return `/api/posts?limit=10&q=${search}`;
    return `/api/posts?cursor=${previousPageData.next_cursor}&limit=${10}&q=${search}`;
  };

export default function LatestTab() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
  return (
    <TabPanel value={TAB_LATEST}>
      <PostList getKey={getPostKey(searchQuery)} action={fetchPost} />
    </TabPanel>
  );
}
