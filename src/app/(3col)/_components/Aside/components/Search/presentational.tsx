import { Input } from "@/lib/mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function Search() {
  return (
    <Input
      placeholder="Search"
      leftSection={<IconSearch size={16} />}
      radius="xl"
      size="md"
      className="w-full"
    />
  );
}
