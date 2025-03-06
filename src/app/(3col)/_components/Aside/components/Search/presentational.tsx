"use client";

import { Flex, Input } from "@/lib/mantine/core";
import { useDebouncedValue } from "@/lib/mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import UsersList from "./components/UserList";

export default function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 200);
  return (
    <Flex direction="column" gap={0} className="w-full relative">
      <Input
        placeholder="Search"
        leftSection={<IconSearch size={16} />}
        radius="xl"
        size="md"
        className="w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <UsersList search={debouncedSearch} shouldHide={!isFocused} />
    </Flex>
  );
}
