"use client";

import { Tabs as MantineTabs, Text } from "@/lib/mantine/core";
import type {
  TabsListProps as MantineTabsListProps,
  TabsProps as MantineTabsProps,
} from "@mantine/core";
import { useState } from "react";

type TabsProps = {
  tabs: string[];
  children: React.ReactNode;
  defaultValue: string | null;
  tabsProps?: MantineTabsProps;
  listProps?: Omit<MantineTabsListProps, "children">;
};

function Tabs({
  tabs,
  children,
  defaultValue,
  tabsProps,
  listProps,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string | null>(defaultValue);
  return (
    <MantineTabs
      defaultValue={defaultValue}
      variant="unstyled"
      value={activeTab}
      onChange={setActiveTab}
      {...tabsProps}
    >
      <MantineTabs.List justify="space-between" grow {...listProps}>
        {tabs.map((value) => {
          const isCurrent = activeTab === value;
          return (
            <MantineTabs.Tab
              key={value}
              className="!border-b !border-gray-200 !p-3 hover:!bg-gray-200 !transition-colors relative"
              value={value}
            >
              <Text c={isCurrent ? "black" : "gray"} fw={isCurrent ? 700 : 500}>
                {value}
              </Text>
              {isCurrent && (
                <div className="w-full h-1 bg-blue-400 rounded relative top-3" />
              )}
            </MantineTabs.Tab>
          );
        })}
      </MantineTabs.List>
      {children}
    </MantineTabs>
  );
}

export default Tabs;
