import { ActionIcon, Flex } from "@/app/_lib/mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export default function Dev() {
  return (
    <Flex px={2}>
      <ActionIcon
        variant="default"
        color="black"
        aria-label="github"
        size={46}
        component={Link}
        href="https://github.com/GentaAmeku/x-clone"
        target="_blank"
      >
        <IconBrandGithub size={32} color="gray" />
      </ActionIcon>
    </Flex>
  );
}
