import { Box, Flex, Space, Stack } from "@mantine/core";
import HeaderBox from "../HeaderBox";
import Policy from "./components/Policy";
import RecommendUsers from "./components/RecommendUsers";
import Search from "./components/Search";
import TrendList from "./components/TrendList";

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
