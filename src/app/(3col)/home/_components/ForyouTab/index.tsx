"use client";

import PostList from "@/app/(3col)/_components/PostList";
import PostInputForm from "@/app/(3col)/home/_components/PostInputForm";
import { ForyouTab as Tab } from "@/app/(3col)/home/_components/Tabs";
import type { PostsResponse, User } from "@/types";
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
    <Tab>
      <PostInputForm user={user} />
      <PostList getKey={getPostKey} action={fetchPost} />
    </Tab>
  );
}
