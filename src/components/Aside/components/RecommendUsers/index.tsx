"use client";

import Section from "@/components/Section";
import ShowMore from "@/components/ShowMore";
import { Stack } from "@mantine/core";
import FollowAnchor from "./components/FollowAnchor";

export default function RecommendUsers() {
	return (
		<Section title="Who to follow">
			<Stack align="flex-start" justify="center" gap={0} px={0}>
				<FollowAnchor />
				<FollowAnchor />
				<FollowAnchor />
			</Stack>
			<ShowMore />
		</Section>
	);
}
