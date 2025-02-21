"use client";

import { ActionIcon, Avatar, Box, Flex, Text } from "@/app/_lib/mantine/core";
import type { Post } from "@/app/_types";
import { IconDots, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import Bookmark from "./components/Bookmark";
import Like from "./components/Like";
import Reply from "./components/Reply";
import Repost from "./components/Repost";
import Share from "./components/Share";
import Views from "./components/Views";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Box
      className="w-full cursor-pointer hover:bg-gray-100 transition-colors border-b"
      p="sm"
    >
      <Flex>
        <Avatar
          radius="sm"
          size={45}
          key={post.user?.name}
          name={post.user?.name}
          color="initials"
        />
        <Flex direction="column" justify="center" className="ml-3" flex={1}>
          <Flex justify="space-between" className="w-full">
            <Flex align="center" gap={3}>
              <Text size="md" fw={700}>
                {post.user?.name}
              </Text>
              <div>
                <IconRosetteDiscountCheckFilled
                  color="var(--color-twitter)"
                  size={18}
                />
              </div>
              <Text
                size="md"
                c="var(--color-gray-600)"
                className="tracking-tight"
              >
                {`${post.user_id} · ${post.fromNow}`}
              </Text>
            </Flex>
            <ActionIcon
              variant="subtle"
              color="black"
              aria-label="post-menu"
              radius="xl"
              size={34}
              className="-mt-1"
            >
              <IconDots color="gray" size={21} />
            </ActionIcon>
          </Flex>
          <Text size="md" className="tracking-tight">
            {post.text}
          </Text>
          <Flex justify="space-between" className="-ml-2 mt-1" wrap="wrap">
            <Flex justify="space-between" w="80%" wrap="wrap">
              <Reply>{post.reply}</Reply>
              <Repost>{post.repost}</Repost>
              <Like>{post.hearts}</Like>
              <Views>{post.views}</Views>
            </Flex>
            <Flex>
              <Bookmark />
              <Share />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
