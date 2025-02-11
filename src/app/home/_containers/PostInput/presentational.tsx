"use client";

import MyAvatar from "@/app/_components/MyAvatar";
import {
	ActionIcon,
	Box,
	Button,
	Divider,
	Flex,
	Text,
	Textarea,
} from "@/app/_lib/mantine/core";
import {
	IconGif,
	IconMoodSmile,
	IconPhoto,
	IconWorld,
} from "@tabler/icons-react";

export default function PostInput() {
	return (
		<>
			<Box px={20} pt={20}>
				<Flex align="flex-start">
					<MyAvatar size={40} />
					<Flex direction="column" className="ml-3 w-full">
						<Textarea
							variant="unstyled"
							size="lg"
							placeholder="What is happening?!"
							className="!pt-0"
							autosize
							minRows={1}
							styles={{ input: { padding: 0 } }}
						/>
						<Button
							size="compact-xs"
							radius="xl"
							variant="subtle"
							leftSection={<IconWorld size={18} className="-mr-1" />}
							className="-ml-2 !w-[170px]"
						>
							<Text fw={500} className="tracking-tighter">
								Everyone can reply
							</Text>
						</Button>
						<Divider my="sm" />
						<Flex justify="space-between">
							<Flex gap={2} className="-ml-2">
								<ActionIcon
									variant="subtle"
									radius="xl"
									size={36}
									aria-label="image"
								>
									<IconPhoto size={18} />
								</ActionIcon>
								<ActionIcon
									variant="subtle"
									radius="xl"
									size={36}
									aria-label="image"
								>
									<IconGif size={24} />
								</ActionIcon>
								<ActionIcon
									variant="subtle"
									radius="xl"
									size={36}
									aria-label="image"
								>
									<IconMoodSmile size={20} />
								</ActionIcon>
							</Flex>
							<Button radius="xl">
								<Text fw={500}>Post</Text>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Box>
			<Divider mt="sm" />
		</>
	);
}
