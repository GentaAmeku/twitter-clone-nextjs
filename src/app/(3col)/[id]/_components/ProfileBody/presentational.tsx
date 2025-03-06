import { Box, Flex, Space, Text } from "@/lib/mantine/core";
import type { User } from "@/types";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import Anchor from "./components/Anchor";

type ProfileBodyProps = Pick<
  User,
  "name" | "user_id" | "profile" | "created_at" | "followers" | "following"
>;

export default function ProfileBody(props: ProfileBodyProps) {
  return (
    <Box p={18}>
      <Flex>
        <Text size="xl" fw={700}>
          {props.name}
        </Text>
      </Flex>
      <Text size="sm" c="var(--color-gray-600)">
        {`@${props.user_id}`}
      </Text>
      <Space h={14} />
      <Text size="md">{props.profile}</Text>
      <Space h={14} />
      <Flex gap={6} align="center">
        <IconCalendarWeekFilled size={18} />
        <Text size="md" c="var(--color-gray-600)">
          <span>Joined</span>
          <span className="ml-1">
            {dayjs(props.created_at).format("dddd YYYY")}
          </span>
        </Text>
      </Flex>
      <Space h={14} />
      <Flex gap={12}>
        <Anchor href={`/${props.user_id}/following`}>
          <span className="font-bold">{props.following.length}</span>
          <span className="ml-1">Following</span>
        </Anchor>
        <Anchor href={`/${props.user_id}/followers`}>
          <span className="font-bold">{props.followers.length}</span>
          <span className="ml-1">Followers</span>
        </Anchor>
      </Flex>
    </Box>
  );
}
