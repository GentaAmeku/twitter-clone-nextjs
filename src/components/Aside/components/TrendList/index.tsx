"use client";

import Section from "@/components/Section";
import ShowMore from "@/components/ShowMore";
import { Stack } from "@mantine/core";
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
