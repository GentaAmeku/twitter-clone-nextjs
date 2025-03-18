import Section from "@/app/(3col)/_components/Section";
import TrendAnchor from "@/app/(3col)/_components/TrendAnchor";
import { Stack } from "@/lib/mantine/core";
import type { Trend } from "@/types";
import ShowMore from "../../components/ShowMore";

type TrendListProps = {
  trends: Trend[];
};

export default function TrendList({ trends }: TrendListProps) {
  return (
    <Section title="What’s happening">
      <Stack align="flex-start" justify="center" gap={0} px={0}>
        {trends.map((trend) => (
          <TrendAnchor key={trend.name} {...trend} />
        ))}
      </Stack>
      <ShowMore />
    </Section>
  );
}
