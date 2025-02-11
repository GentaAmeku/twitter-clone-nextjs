import ShowMore from "@/app/_components/Aside/components/ShowMore";
import Section from "@/app/_components/Section";
import { Stack } from "@/app/_lib/mantine/core";
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
