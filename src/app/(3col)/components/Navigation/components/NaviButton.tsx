"use client";

import { useIsXl } from "@/lib/hooks";
import { ActionIcon, Button } from "@/lib/mantine/core";

type NaviButtonProps = {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode | string;
};

const NaviButton = ({ icon, href, children }: NaviButtonProps) => {
  const isXl = useIsXl();
  if (isXl)
    return (
      <ActionIcon
        color="black"
        radius="xl"
        variant="subtle"
        size={60}
        component="a"
        href={href || "#"}
      >
        {icon}
      </ActionIcon>
    );
  return (
    <Button
      component="a"
      href={href || "#"}
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
