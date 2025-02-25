import { Avatar, Button, Flex, Text } from "@/lib/mantine/core";
import type { User } from "@/types";
import { IconBrandNextjs } from "@tabler/icons-react";

type FollowAnchorProps = User;

const FollowAnchor = ({ name, user_id }: FollowAnchorProps) => (
  <Flex
    justify="space-between"
    align="center"
    className="w-full cursor-pointer hover:bg-gray-100 transition-colors"
    p="md"
  >
    <Flex flex={1} align="center">
      <Avatar radius="sm" size={45} key={name} name={name} color="initials" />
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

export default FollowAnchor;
