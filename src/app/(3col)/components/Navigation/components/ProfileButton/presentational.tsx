"use client";

import { useIsXl } from "@/lib/hooks";
import { ActionIcon, Avatar, Button, Flex, Text } from "@/lib/mantine/core";
import { IconDots } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type ProfileButtonProps = {
  name: string;
  userId: string;
};

const ProfileButton = (props: ProfileButtonProps) => {
  const isXl = useIsXl();
  const router = useRouter();
  const handleClickAvatar = () => router.push(`/${props.userId}`);

  useEffect(() => {
    if (props.userId) {
      router.prefetch(`/${props.userId}`);
    }
  }, [router, props.userId]);

  if (isXl)
    return (
      <ActionIcon
        variant="subtle"
        radius="xl"
        size={60}
        color="white"
        onClick={handleClickAvatar}
      >
        <Avatar
          radius="xl"
          size={45}
          key={props.name}
          name={props.name}
          color="initials"
        />
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
        onClick={handleClickAvatar}
      >
        <Avatar
          radius="xl"
          size={45}
          key={props.name}
          name={props.name}
          color="initials"
        />
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          className="ml-3"
        >
          <Text size="sm" fw={700}>
            {props.name}
          </Text>
          <Text size="sm" c="var(--color-gray-600)">{`@${props.userId}`}</Text>
        </Flex>
      </Button>
    </div>
  );
};

export default ProfileButton;
