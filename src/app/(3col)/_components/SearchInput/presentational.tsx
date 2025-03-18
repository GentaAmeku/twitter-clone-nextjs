"use client";

import { Flex, Input } from "@/lib/mantine/core";
import { useDebouncedValue } from "@/lib/mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import UsersList from "./components/UserList";

export default function SearchInput() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(defaultQuery);
  const [debouncedSearch] = useDebouncedValue(search, 200);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleSearch}
      />
      <UsersList search={debouncedSearch} shouldHide={!isFocused} />
    </Flex>
  );
}
