import { ActionIcon, Avatar, Box, Flex, Text } from "@/app/_lib/mantine/core";
import { colors } from "@/app/_styles/colors";
import {
	IconBrandLine,
	IconBrandNextjs,
	IconChartBar,
	IconDots,
	IconHeart,
	IconRepeat,
	IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";

export default function PostCard() {
	return (
		<Box
			className="w-full cursor-pointer hover:bg-gray-100 transition-colors"
			p="sm"
		>
			<Flex>
				<Avatar radius="sm" size={45} color="blue">
					<IconBrandNextjs size={30} color="gray" />
				</Avatar>
				<Flex direction="column" justify="center" className="ml-3" flex={1}>
					<Flex justify="space-between" className="w-full">
						<Flex align="center" gap={3}>
							<Text size="md" fw={700}>
								Next.js
							</Text>
							<div>
								<IconRosetteDiscountCheckFilled color={colors.blue} size={21} />
							</div>
							<Text size="md" c="gray" className="tracking-tight">
								@nextjs · Oct 25,2024
							</Text>
						</Flex>
						<ActionIcon
							variant="subtle"
							color="black"
							aria-label="post-menu"
							radius="xl"
							size={34}
							className="-mt-1"
						>
							<IconDots color="gray" size={21} />
						</ActionIcon>
					</Flex>

					<Text size="md" className="tracking-tight">
						Next.js Conf starts in one hour. Join us live at 9:00 AM PT.
					</Text>

					<Flex gap={2} className="-ml-2">
						<ActionIcon
							variant="subtle"
							radius="xl"
							size={36}
							aria-label="image"
						>
							<IconBrandLine size={18} />
						</ActionIcon>
						<ActionIcon
							variant="subtle"
							radius="xl"
							size={36}
							aria-label="image"
						>
							<IconRepeat size={18} />
						</ActionIcon>
						<ActionIcon
							variant="subtle"
							radius="xl"
							size={36}
							aria-label="image"
						>
							<IconHeart size={18} />
						</ActionIcon>
						<ActionIcon
							variant="subtle"
							radius="xl"
							size={36}
							aria-label="image"
						>
							<IconChartBar size={18} />
						</ActionIcon>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
