"use client";

import { Loader, Space } from "@/lib/mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import UserCard from "./components/UserCard";

import type { UsersResponse } from "@/types";
import type { Variants } from "framer-motion";
import { useEffect } from "react";

type UsersListProps<T extends UsersResponse> = {
  getKey: (pageIndex: number, previousPageData: T) => string | null;
  action: (key: string) => Promise<T>;
};

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function UserList<T extends UsersResponse>({
  getKey,
  action,
}: UsersListProps<T>) {
  const { data, setSize, isLoading } = useSWRInfinite(getKey, action);

  console.log("data", data);
  const [ref, inView] = useInView();
  const users = data ? data.flatMap((page) => page.data) : [];
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
        {users.map((user) => (
          <motion.article key={user.id} {...variants} layout="position">
            <UserCard user={user} />
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
