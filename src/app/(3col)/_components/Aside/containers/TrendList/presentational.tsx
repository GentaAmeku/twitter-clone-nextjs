import Section from "@/app/(3col)/_components/Section";
import { Stack } from "@/app/_lib/mantine/core";
import ShowMore from "../../components/ShowMore";
import TrendAnchor from "./components/TrendAnchor";

export default function TrendList() {
	return (
		<Section title="What’s happening">
			<Stack align="flex-start" justify="center" gap={0} px={0}>
				<TrendAnchor />
				<TrendAnchor />
				<TrendAnchor />
			</Stack>
			<ShowMore />
		</Section>
	);
}
