import MyAvatar from "@/components/MyAvatar";
import { Avatar, Button, Flex, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

const ProfileButton = () => (
	<Button
		color="black"
		size="65"
		radius="65"
		variant="subtle"
		justify="space-between"
		rightSection={<IconDots color="black" />}
		px={12}
		className="active:!transform-none hover:!bg-gray-200 transition-colors"
		fullWidth
	>
		<MyAvatar />
		<Flex
			direction="column"
			justify="center"
			align="flex-start"
			className="ml-3"
		>
			<Text size="md" fw={700} inline>
				Ameku Genta
			</Text>
			<Text size="md">@genta_ameku</Text>
		</Flex>
	</Button>
);

export default ProfileButton;
