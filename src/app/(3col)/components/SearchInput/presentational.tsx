"use client";

import { Flex, Input } from "@/lib/mantine/core";
import { useDebouncedValue } from "@/lib/mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UsersList from "./components/UserList";

type SearchInputProps = {
  defaultValue?: string;
};

export default function SearchInput({ defaultValue = "" }: SearchInputProps) {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState(defaultValue);
  const [debouncedSearch] = useDebouncedValue(search, 200);
  const showUsersList = () => setIsFocused(true);
  const hideUsersList = () => setIsFocused(false);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search) {
      e.preventDefault();
      e.stopPropagation();
      hideUsersList();
      router.push(`/explore?q=${search}`);
    }
  };

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
        onFocus={showUsersList}
        onBlur={hideUsersList}
        onKeyDown={handleSearch}
      />
      <UsersList
        search={debouncedSearch}
        shouldHide={!isFocused}
        hideUsersList={hideUsersList}
      />
    </Flex>
  );
}
