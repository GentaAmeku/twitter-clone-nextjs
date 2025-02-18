"use client";

import { useIsXl } from "@/app/_lib/hooks";
import { ActionIcon, Button } from "@/app/_lib/mantine/core";
import { IconPencilPlus } from "@tabler/icons-react";

const PostButton = () => {
	const isXl = useIsXl();
	if (isXl)
		return (
			<ActionIcon radius="xl" size={58} color="var(--color-twitter)">
				<IconPencilPlus />
			</ActionIcon>
		);
	return (
		<div className="px-5 -ml-5 w-full">
			<Button
				fullWidth
				color="var(--color-twitter)"
				size="xl"
				radius="xl"
				variant="filled"
			>
				Post
			</Button>
		</div>
	);
};

export default PostButton;
