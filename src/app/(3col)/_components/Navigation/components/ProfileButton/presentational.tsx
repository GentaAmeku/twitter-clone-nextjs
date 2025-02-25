"use client";

import MyAvatar from "@/app/(3col)/_components/MyAvatar";
import { useIsXl } from "@/lib/hooks";
import { ActionIcon, Button, Flex, Text } from "@/lib/mantine/core";
import { IconDots } from "@tabler/icons-react";

type ProfileButtonProps = {
  name: string;
  userId: string;
};

const ProfileButton = (props: ProfileButtonProps) => {
  const isXl = useIsXl();
  if (isXl)
    return (
      <ActionIcon variant="subtle" radius="xl" size={60} color="white">
        <MyAvatar />
      </ActionIcon>
    );
  return (
    <div className="p-5 w-full">
      <Button
        color="black"
        size="65"
        radius="xl"
        variant="subtle"
        justify="space-between"
        rightSection={<IconDots color="black" />}
        px={8}
        className="active:!transform-none hover:!bg-gray-200 transition-colors !w-[240px]"
      >
        <MyAvatar />
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          className="ml-3"
        >
          <Text size="sm" fw={700}>
            {props.name}
          </Text>
          <Text size="sm">{props.userId}</Text>
        </Flex>
      </Button>
    </div>
  );
};

export default ProfileButton;
