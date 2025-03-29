"use client";

import { useIsXl } from "@/lib/hooks";
import { Stack } from "@/lib/mantine/core";

type ResponsiveStackProps = {
  children: React.ReactNode;
};

export default function ResponsiveStack(props: ResponsiveStackProps) {
  const isXl = useIsXl();
  return (
    <Stack align={!isXl ? "flex-start" : "center"} gap="sm">
      {props.children}
    </Stack>
  );
}
