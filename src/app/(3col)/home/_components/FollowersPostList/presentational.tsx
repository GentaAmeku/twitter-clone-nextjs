"use client";

import { Loader, Space } from "@/lib/mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import PostCard from "../PostCard";
import { fetchPost } from "./actions";

import type { PostsResponse } from "@/types";
import type { Variants } from "framer-motion";
import { useEffect } from "react";

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const getKey = (pageIndex: number, previousPageData: PostsResponse) => {
  if (previousPageData && !previousPageData.has_next) return null;
  if (pageIndex === 0) return "/api/users/:id/followers/posts?limit=10";
  return `/api/users/:id/followers/posts?cursor=${previousPageData.next_cursor}&limit=${10}`;
};

export default function FollowersPostList() {
  const { data, setSize, isLoading } = useSWRInfinite(getKey, fetchPost);
  const [ref, inView] = useInView();
  const posts = data ? data.flatMap((page) => page.data) : [];
  const hasNext = data?.at(-1)?.has_next;

  useEffect(() => {
    if (inView && hasNext && !isLoading) {
      setSize((prev) => prev + 1);
    }
  }, [inView, hasNext, isLoading, setSize]);

  if (!data)
    return (
      <div className="text-center w-full">
        <Space h="md" />
        <Loader />
      </div>
    );

  return (
    <div>
      <AnimatePresence mode="popLayout">
        {posts.map((post) => (
          <motion.article key={post.id} {...variants} layout="position">
            <PostCard post={post} />
          </motion.article>
        ))}
      </AnimatePresence>
      {hasNext && (
        <div className="text-center w-full" ref={ref}>
          <Space h="md" />
          <Loader />
        </div>
      )}
    </div>
  );
}
