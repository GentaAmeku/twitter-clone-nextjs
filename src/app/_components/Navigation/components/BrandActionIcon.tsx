import { ActionIcon } from "@/app/_lib/mantine/core";
import { colors } from "@/app/_styles/colors";
import { IconBrandX } from "@tabler/icons-react";

const BrandActionIcon = () => (
	<ActionIcon
		variant="subtle"
		color="gray"
		size={60}
		radius="xl"
		aria-label="BrandIcon"
	>
		<IconBrandX size={36} color={colors.blue} />
	</ActionIcon>
);

export default BrandActionIcon;
