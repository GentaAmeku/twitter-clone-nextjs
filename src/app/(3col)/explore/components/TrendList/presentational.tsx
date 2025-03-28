import TrendAnchor from "@/app/(3col)/components/TrendAnchor";
import type { Trend } from "@/types";

type TrendListProps = {
  trends: Trend[];
};

export default function TrendList({ trends }: TrendListProps) {
  return trends.map((trend) => <TrendAnchor key={trend.name} {...trend} />);
}
