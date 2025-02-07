import { Button } from "@mantine/core";
import type { ReactNode } from "react";

type NaviButtonProps = {
	icon: ReactNode;
	children: ReactNode | string;
};

const NaviButton = ({ icon, children }: NaviButtonProps) => (
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

export default NaviButton;
