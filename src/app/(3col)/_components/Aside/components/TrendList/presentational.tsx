import Section from "@/app/(3col)/_components/Section";
import { Stack } from "@/app/_lib/mantine/core";
import type { Trend } from "@/app/_types";
import ShowMore from "../../components/ShowMore";
import TrendAnchor from "./components/TrendAnchor";

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
