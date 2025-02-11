import { ActionIcon } from "@/app/_lib/mantine/core";
import { IconBrandX } from "@tabler/icons-react";

const BrandActionIcon = () => (
	<ActionIcon
		variant="subtle"
		color="gray"
		size={52}
		radius="xl"
		aria-label="BrandIcon"
		ml={3}
	>
		<IconBrandX size={36} color="blue" />
	</ActionIcon>
);

export default BrandActionIcon;
