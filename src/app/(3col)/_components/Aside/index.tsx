import HeaderBox from "@/app/(3col)/_components/HeaderBox";
import { Flex, Space, Stack } from "@/app/_lib/mantine/core";
import Dev from "./components/Dev";
import RecommendUsers from "./components/RecommendUsers";
import Search from "./components/Search";
import TrendList from "./components/TrendList";

export default function Aside() {
  return (
    <aside className="ml-8">
      <HeaderBox>
        <Flex mih="100%" justify="flex-start" align="center">
          <Search />
        </Flex>
      </HeaderBox>
      <Space h="sm" />
      <Stack align="flex-start" justify="center" gap="lg">
        <TrendList />
        <RecommendUsers />
        <Dev />
      </Stack>
    </aside>
  );
}
