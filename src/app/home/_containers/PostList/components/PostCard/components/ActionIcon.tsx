import {
	Flex,
	ActionIcon as MantineActionIcon,
	Text,
} from "@/app/_lib/mantine/core";
import { colors } from "@/app/_styles/colors";

type ActionIconProps = {
	icon: React.ReactNode;
	children?: React.ReactNode | string;
};

export default function ActionIcon({ icon, children }: ActionIconProps) {
	return (
		<Flex align="center">
			<MantineActionIcon
				variant="subtle"
				radius="xl"
				size={36}
				aria-label="image"
			>
				{icon}
			</MantineActionIcon>
			{children && (
				<Text size="sm" c={colors.gray}>
					{children}
				</Text>
			)}
		</Flex>
	);
}
