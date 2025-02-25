"use client";

import { useIsMd } from "@/lib/hooks";
import { Avatar, AvatarGroup, Flex, Space, Text } from "@/lib/mantine/core";
import { IconBrandTwitterFilled, IconBrandXFilled } from "@tabler/icons-react";

export default function RightSide() {
  const isMd = useIsMd();
  if (isMd) return null;
  return (
    <div className="bg-sky-500 flex-1 px-20 py-25">
      <Text c="white" size="xl" fw={600} className="text-center">
        Join Twitter today and see whatt's happening in the world right now
      </Text>
      <Flex
        direction="column"
        justify="center"
        align="center"
        className="h-full"
      >
        <AvatarGroup spacing="sm">
          <Avatar size={80} color="gray" className="!shadow-lg">
            <IconBrandXFilled size={40} color="var(--color-twitter)" />
          </Avatar>
          <Avatar size={80} color="gray" className="!shadow-lg">
            <IconBrandTwitterFilled size={40} color="var(--color-twitter)" />
          </Avatar>
        </AvatarGroup>
        <Space h="xl" />
        <Text c="white" size="xl" fw={600}>
          X (Twitter) Clone
        </Text>
        <Text c="white" size="xl" fw={600}>
          Development by Genta Ameku
        </Text>
      </Flex>
    </div>
  );
}
