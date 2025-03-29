import { Tabs as MantineTabs } from "@/lib/mantine/core";
import type { TabsPanelProps as MantineTabsPanelProps } from "@mantine/core";

export default function TabPanel({ value, children }: MantineTabsPanelProps) {
  return <MantineTabs.Panel value={value}>{children}</MantineTabs.Panel>;
}
