import { ActionIcon, Avatar, Box, Flex, Text } from "@/app/_lib/mantine/core";
import { colors } from "@/app/_styles/colors";
import {
	IconBrandNextjs,
	IconDots,
	IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import Share from "./components/Share";
import Views from "./components/Views";
import Bookmark from "./containers/Bookmark";
import Like from "./containers/Like";
import Reply from "./containers/Reply";
import Repost from "./containers/Repost";

export default function PostCard() {
	return (
		<Box
			className="w-full cursor-pointer hover:bg-gray-100 transition-colors border-b"
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
								<IconRosetteDiscountCheckFilled color={colors.blue} size={18} />
							</div>
							<Text size="md" c={colors.gray} className="tracking-tight">
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
					<Flex gap={52} className="-ml-2 mt-1 w-full">
						<Reply />
						<Repost />
						<Like />
						<Views />
						<Flex>
							<Bookmark />
							<Share />
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
