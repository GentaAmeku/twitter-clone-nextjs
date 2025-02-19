import { ActionIcon, Flex } from "@/app/_lib/mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Dev() {
	return (
		<Flex px={2}>
			<ActionIcon variant="default" color="black" aria-label="github" size={46}>
				<IconBrandGithub size={32} color="gray" />
			</ActionIcon>
		</Flex>
	);
}
