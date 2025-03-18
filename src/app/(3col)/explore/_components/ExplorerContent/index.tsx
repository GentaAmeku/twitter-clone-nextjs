"use client";

import SearchInput from "@/app/(3col)/_components/SearchInput";
import Tabs from "@/app/(3col)/_components/Tabs";
import type { ReactNode } from "react";
import { TAB_TRENDING, tabs } from "../../_data";
import TrendingTab from "../TrendingTab";

type ExplorerContentProps = {
  trendListComponent: ReactNode;
};

export default function ExplorerContent({
  trendListComponent,
}: ExplorerContentProps) {
  return (
    <div className="min-h-screen border-r border-l">
      <div className="sticky top-0 z-10 bg-white opacity-95">
        <div className="py-3 px-3">
          <SearchInput />
        </div>
      </div>
      <Tabs tabs={tabs} defaultValue={TAB_TRENDING}>
        <TrendingTab>{trendListComponent}</TrendingTab>
      </Tabs>
    </div>
  );
}
