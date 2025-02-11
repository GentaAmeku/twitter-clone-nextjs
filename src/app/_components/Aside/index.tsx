import HeaderBox from "@/app/_components/HeaderBox";
import { Box, Flex, Space, Stack } from "@/app/_lib/mantine/core";
import Policy from "./components/Policy";
import RecommendUsers from "./containers/RecommendUsers";
import Search from "./containers/Search";
import TrendList from "./containers/TrendList";

export default function Aside() {
	return (
		<Box ml="xl">
			<HeaderBox>
				<Flex mih="100%" justify="flex-start" align="center">
					<Search />
				</Flex>
			</HeaderBox>
			<Space h="sm" />
			<Stack align="flex-start" justify="center" gap="lg">
				<TrendList />
				<RecommendUsers />
				<Policy />
			</Stack>
		</Box>
	);
}
