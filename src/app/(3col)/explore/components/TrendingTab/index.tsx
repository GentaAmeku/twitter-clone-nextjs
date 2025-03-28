import TabPanel from "@/app/(3col)/components/Tabs/Panel";
import type { ReactNode } from "react";
import { TAB_TRENDING } from "../../data";

type TrendingTabProps = {
  children: ReactNode;
};

export default function TrendingTab({ children }: TrendingTabProps) {
  return <TabPanel value={TAB_TRENDING}>{children}</TabPanel>;
}
