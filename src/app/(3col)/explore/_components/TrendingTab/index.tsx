import TabPanel from "@/app/(3col)/_components/Tabs/Panel";
import type { ReactNode } from "react";
import { TAB_TRENDING } from "../../_data";

type TrendingTabProps = {
  children: ReactNode;
};

export default function TrendingTab({ children }: TrendingTabProps) {
  return <TabPanel value={TAB_TRENDING}>{children}</TabPanel>;
}
