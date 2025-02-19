"use client";

import { useIsXl } from "@/app/_lib/hooks";
import { ActionIcon, Button } from "@/app/_lib/mantine/core";

type NaviButtonProps = {
	icon: React.ReactNode;
	children: React.ReactNode | string;
};

const NaviButton = ({ icon, children }: NaviButtonProps) => {
	const isXl = useIsXl();
	if (isXl)
		return (
			<ActionIcon color="black" radius="xl" variant="subtle" size={60}>
				{icon}
			</ActionIcon>
		);
	return (
		<Button
			leftSection={icon}
			color="black"
			size="xl"
			radius="xl"
			variant="subtle"
			className="active:!transform-none hover:!bg-gray-200 transition-colors"
		>
			{children}
		</Button>
	);
};

export default NaviButton;
