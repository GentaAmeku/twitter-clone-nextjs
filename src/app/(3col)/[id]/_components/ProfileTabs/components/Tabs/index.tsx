"use client";

import { Tabs as MantineTabs, Text } from "@/lib/mantine/core";
import { useState } from "react";
import { TABS, TAB_LIKES, TAB_POSTS } from "./data";

const { List, Tab, Panel } = MantineTabs;

function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<string | null>(TAB_POSTS);
  return (
    <MantineTabs
      defaultValue={TAB_POSTS}
      variant="unstyled"
      value={activeTab}
      onChange={setActiveTab}
    >
      <List justify="space-between" grow>
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

export const PostsTab = function TabPosts({
  children,
}: { children: React.ReactNode }) {
  return <Panel value={TAB_POSTS}>{children}</Panel>;
};

export const LikesTab = function TabLikes({
  children,
}: { children: React.ReactNode }) {
  return <Panel value={TAB_LIKES}>{children}</Panel>;
};

export default Tabs;
