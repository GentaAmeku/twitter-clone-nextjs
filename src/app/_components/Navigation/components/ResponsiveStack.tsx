"use client";

import { useIsXl } from "@/app/_lib/hooks";
import { Stack } from "@/app/_lib/mantine/core";

type ResponsiveStackProps = {
	children: React.ReactNode;
};

export default function ResponsiveStack(props: ResponsiveStackProps) {
	const isXl = useIsXl();
	if (isXl)
		return (
			<Stack align="center" gap="sm">
				{props.children}
			</Stack>
		);
	return (
		<Stack align="flex-start" gap="sm">
			{props.children}
		</Stack>
	);
}
