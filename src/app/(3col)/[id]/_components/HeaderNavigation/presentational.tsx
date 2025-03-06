"use client";

import { ActionIcon, Flex, Space, Text } from "@/lib/mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type HeaderNavigationProps = {
  name: string;
  postCount: number;
};

export default function HeaderNavigation({
  name,
  postCount,
}: HeaderNavigationProps) {
  const router = useRouter();
  return (
    <Flex
      justify="flex-start"
      align="center"
      className="sticky top-0 z-10 bg-white opacity-95 p-1 border-l border-r"
    >
      <ActionIcon
        variant="subtle"
        color="gray"
        size={38}
        radius="xl"
        aria-label="back-icon"
        onClick={() => router.back()}
      >
        <IconArrowLeft size={24} color="black" />
      </ActionIcon>
      <Flex
        direction="column"
        justify="center"
        align="flex-start"
        className="ml-3"
      >
        <Text size="xl" fw={600} inline>
          {name}
        </Text>
        <Space h={5} />
        <Text size="sm" c="var(--color-gray-600)">{`${postCount} posts`}</Text>
      </Flex>
    </Flex>
  );
}
