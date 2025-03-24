"use client";

import { ActionIcon, Avatar, Button, Flex, Text } from "@/lib/mantine/core";
import type { User } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type FollowAnchorProps = User;

const FollowAnchor = ({ name, user_id }: FollowAnchorProps) => {
  const router = useRouter();
  const handleClickAvatar = () => router.push(`/${user_id}`);

  useEffect(() => {
    if (user_id) {
      router.prefetch(`/${user_id}`);
    }
  }, [router, user_id]);

  return (
    <Flex
      justify="space-between"
      align="center"
      className="w-full cursor-pointer hover:bg-gray-100 transition-colors"
      p="md"
    >
      <Flex flex={1} align="center">
        <ActionIcon
          variant="subtle"
          color="gray"
          radius="sm"
          onClick={handleClickAvatar}
          size={45}
        >
          <Avatar
            radius="sm"
            size={45}
            key={name}
            name={name}
            color="initials"
          />
        </ActionIcon>
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          className="ml-3"
        >
          <Text size="md" fw={700} inline>
            {name}
          </Text>
          <Text size="md">{user_id}</Text>
        </Flex>
      </Flex>
      <Button color="var(--color-twitter)" size="sm" radius="xl">
        Follow
      </Button>
    </Flex>
  );
};

export default FollowAnchor;
