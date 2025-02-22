import { getRandomInt } from "@/app/_lib/utils";
import type { Trend } from "@/app/_types";
import { v4 as uuidv4 } from "uuid";
import { createDatabase } from "../createDatabase";

const generateTrend = (name: string): Trend => {
  return {
    id: uuidv4(),
    name,
    query: name,
    group: "IT",
    volume: getRandomInt(10000, 1000),
  };
};

const sortByVolume = (trends: Trend[]): Trend[] => {
  return trends.sort((a, b) => b.volume - a.volume);
};

export default createDatabase<Trend>(
  sortByVolume([
    generateTrend("@conform-to/react"),
    generateTrend("@conform-to/zod"),
    generateTrend("@mantine/core"),
    generateTrend("@mantine/hooks"),
    generateTrend("@tabler/icons-react"),
    generateTrend("clsx"),
    generateTrend("dayjs"),
    generateTrend("jotai"),
    generateTrend("next"),
    generateTrend("react"),
    generateTrend("react-dom"),
    generateTrend("react-intersection-observer"),
    generateTrend("tailwind-merge"),
    generateTrend("unique-username-generator"),
    generateTrend("uuid"),
    generateTrend("zod"),
    generateTrend("@biomejs/biome"),
    generateTrend("@tailwindcss/postcss"),
    generateTrend("@types/node"),
    generateTrend("@types/react"),
    generateTrend("@types/react-dom"),
    generateTrend("msw"),
    generateTrend("postcss"),
    generateTrend("postcss-preset-mantine"),
    generateTrend("postcss-simple-vars"),
    generateTrend("tailwindcss"),
    generateTrend("typescript"),
  ]),
);
