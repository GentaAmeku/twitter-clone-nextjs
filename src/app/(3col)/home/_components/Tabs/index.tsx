"use client";

import { Tabs as MantineTabs, Text } from "@/lib/mantine/core";
import { useState } from "react";
import { TABS, TAB_FOLLOWING, TAB_FOR_YOU } from "./data";

const { List, Tab, Panel } = MantineTabs;

function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<string | null>(TAB_FOR_YOU);
  return (
    <MantineTabs
      defaultValue={TAB_FOR_YOU}
      variant="unstyled"
      value={activeTab}
      onChange={setActiveTab}
      className="border-r border-l min-h-screen"
    >
      <List
        justify="space-between"
        grow
        className="sticky top-0 z-1 bg-white opacity-95"
      >
        {TABS.map((tab) => {
          const isCurrent = activeTab === tab.value;
          return (
            <Tab
              key={tab.value}
              value={tab.value}
              className="!border-b !border-gray-200 !p-3 hover:!bg-gray-200 !transition-colors relative"
            >
              <Text c={isCurrent ? "black" : "gray"} fw={isCurrent ? 700 : 500}>
                {tab.label}
              </Text>
              {isCurrent && (
                <div className="w-full h-1 bg-blue-400 rounded relative top-3" />
              )}
            </Tab>
          );
        })}
      </List>
      {children}
    </MantineTabs>
  );
}

export const ForyouTab = function TabsA({
  children,
}: { children: React.ReactNode }) {
  return <Panel value={TAB_FOR_YOU}>{children}</Panel>;
};

export const FollowingTab = function TabsB({
  children,
}: { children: React.ReactNode }) {
  return <Panel value={TAB_FOLLOWING}>{children}</Panel>;
};

export default Tabs;
