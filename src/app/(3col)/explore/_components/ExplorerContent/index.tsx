"use client";

import SearchInput from "@/app/(3col)/_components/SearchInput";
import Tabs from "@/app/(3col)/_components/Tabs";
import { useSearchParams } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import {
  TAB_LATEST,
  TAB_TRENDING,
  tabsForSearch,
  tabsForTrending,
} from "../../_data";
import LatestTab from "../LatestTab";
import PeopleTab from "../PeopleTab";
import TrendingTab from "../TrendingTab";

type ExplorerContentProps = {
  trendListComponent: ReactNode;
};

const SearchTabs = () => {
  return (
    <Tabs tabs={tabsForSearch} defaultValue={TAB_LATEST}>
      <LatestTab />
      <PeopleTab />
    </Tabs>
  );
};

const TrendTabs = ({
  trendListComponent,
}: { trendListComponent: ReactNode }) => {
  return (
    <Tabs tabs={tabsForTrending} defaultValue={TAB_TRENDING}>
      <TrendingTab>{trendListComponent}</TrendingTab>
    </Tabs>
  );
};

export default function ExplorerContent({
  trendListComponent,
}: ExplorerContentProps) {
  const [hasQuery, setHasQuery] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") ?? "";

  useEffect(() => {
    const currentQuery = searchParams?.get("q") ?? "";
    setHasQuery(currentQuery !== "");
  }, [searchParams]);

  return (
    <div className="min-h-screen border-r border-l">
      <div className="sticky top-0 z-10 bg-white opacity-95">
        <div className="py-3 px-3">
          <SearchInput defaultValue={defaultQuery} />
        </div>
      </div>
      {hasQuery ? (
        <SearchTabs />
      ) : (
        <TrendTabs trendListComponent={trendListComponent} />
      )}
    </div>
  );
}
