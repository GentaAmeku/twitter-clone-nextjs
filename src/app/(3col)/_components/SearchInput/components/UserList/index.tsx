"use client";

import { Avatar, Flex, Paper, ScrollArea, Text } from "@/lib/mantine/core";
import type { User } from "@/types";
import { useRouter } from "next/navigation";
import { memo } from "react";
import useSWR from "swr";
import { fetchUsers } from "./actions";
import NoUsers from "./components/NoUsers";

const NUMBER_OF_USERS = 10;

type UsersListProps = {
  search: string;
  shouldHide: boolean;
  hideUsersList: () => void;
};

function UsersList({ search, shouldHide, hideUsersList }: UsersListProps) {
  const { data: users } = useSWR<User[]>(
    search ? `/api/users?search=${search}&limit=${NUMBER_OF_USERS}` : null,
    fetchUsers,
  );
  const router = useRouter();

  const handleClick = (userId: string, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/${userId}`);
    hideUsersList();
  };

  if (shouldHide) return null;

  return (
    <Paper
      shadow="md"
      radius="md"
      withBorder
      className="absolute w-full top-[100%] z-20"
    >
      {!users || users?.length === 0 ? (
        <NoUsers />
      ) : (
        <ScrollArea h={650} scrollbars="y">
          {users.map((user) => (
            <Flex
              align="center"
              key={user.id}
              className="w-full cursor-pointer hover:bg-gray-100 transition-colors"
              p="md"
              onMouseDown={(e) => handleClick(user.user_id, e)}
            >
              <Avatar
                radius="sm"
                size={45}
                key={user.name}
                name={user.name}
                color="initials"
              />
              <Flex
                direction="column"
                justify="center"
                className="ml-3"
                flex={1}
              >
                <Text size="sm" fw={700}>
                  {user.name}
                </Text>
                <Text size="sm">{user.user_id}</Text>
              </Flex>
            </Flex>
          ))}
        </ScrollArea>
      )}
    </Paper>
  );
}

export default memo(UsersList);
