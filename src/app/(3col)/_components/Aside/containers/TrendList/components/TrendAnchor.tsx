import { Flex, Text } from "@/app/_lib/mantine/core";
import { IconDots } from "@tabler/icons-react";

export default function TrendAnchor() {
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
						IT - Trending
					</Text>
					<Text size="md" c="black" fw={700}>
						#Next.js
					</Text>
					<Text size="sm" c="gray" fw={500}>
						38.5K posts
					</Text>
				</Flex>
			</Flex>
			<IconDots color="gray" />
		</Flex>
	);
}
