import { Avatar, Button, Flex, Text } from "@/app/_lib/mantine/core";
import { IconBrandNextjs } from "@tabler/icons-react";

const FollowAnchor = () => (
	<Flex
		justify="space-between"
		align="center"
		className="w-full cursor-pointer hover:bg-gray-100 transition-colors"
		p="md"
	>
		<Flex flex={1} align="center">
			<Avatar radius="sm" size={45} color="blue">
				<IconBrandNextjs size={30} color="gray" />
			</Avatar>
			<Flex
				direction="column"
				justify="center"
				align="flex-start"
				className="ml-3"
			>
				<Text size="md" fw={700} inline>
					Next.js
				</Text>
				<Text size="md">@Next.js</Text>
			</Flex>
		</Flex>
		<Button color="blue" size="sm" radius="xl">
			Follow
		</Button>
	</Flex>
);

export default FollowAnchor;
