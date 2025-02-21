import { Flex, Text } from "@/app/_lib/mantine/core";
import { formatNumber } from "@/app/_lib/utils";
import type { Trend } from "@/app/_types";
import { IconDots } from "@tabler/icons-react";

type TrendAnchorProps = Trend;

export default function TrendAnchor({
	group,
	name,
	volume,
	query,
}: TrendAnchorProps) {
	return (
		<Flex
			justify="space-between"
			align="center"
			className="w-full cursor-pointer hover:bg-gray-100 transition-colors"
			p="md"
		>
			<Flex flex={1} align="center">
				<Flex direction="column" align="flex-start" className="w-full">
					<Text size="sm" c="gray" fw={500} inline>
						{`${group} - Trending`}
					</Text>
					<Text size="md" c="black" fw={700}>
						{name}
					</Text>
					<Text size="sm" c="gray" fw={500}>
						{`${formatNumber(volume)} posts`}
					</Text>
				</Flex>
			</Flex>
			<IconDots color="gray" />
		</Flex>
	);
}
