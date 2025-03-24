"use client";

import { ActionIcon, Avatar, Button, Flex, Text } from "@/lib/mantine/core";
import type { User } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  const router = useRouter();
  const handleClickAvatar = () => router.push(`/${user.user_id}`);

  useEffect(() => {
    if (user.user_id) {
      router.prefetch(`/${user.user_id}`);
    }
  }, [router, user.user_id]);

  return (
    <article className="w-full cursor-pointer hover:bg-gray-100 transition-colors border-b break-all p-4 relative">
      <Flex>
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
            key={user.name}
            name={user.name}
            color="initials"
          />
        </ActionIcon>
        <Flex direction="column" justify="center" className="ml-3" flex={1}>
          <Flex justify="space-between" align="center" className="w-full">
            <Flex direction="column" justify="center" flex={1}>
              <Text size="md" fw={700}>
                {user.name}
              </Text>
              <Text
                size="md"
                c="var(--color-gray-600)"
                className="tracking-tight"
              >
                {user.user_id}
              </Text>
            </Flex>
            <Button color="var(--color-twitter)" size="sm" radius="xl">
              Follow
            </Button>
          </Flex>

          <Text size="md" className="tracking-tight">
            {user.profile}
          </Text>
        </Flex>
      </Flex>
    </article>
  );
}
