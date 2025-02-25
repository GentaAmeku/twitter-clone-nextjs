import { ActionIcon } from "@/lib/mantine/core";
import { IconBrandTwitterFilled } from "@tabler/icons-react";

const BrandActionIcon = () => (
  <ActionIcon
    variant="subtle"
    color="gray"
    size={60}
    radius="xl"
    aria-label="BrandIcon"
  >
    <IconBrandTwitterFilled size={36} color="var(--color-twitter)" />
  </ActionIcon>
);

export default BrandActionIcon;
