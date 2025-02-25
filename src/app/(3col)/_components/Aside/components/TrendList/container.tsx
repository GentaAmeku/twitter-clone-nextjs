"use server";

import { get } from "@/app/_lib/utils/fetcher";
import type { Trend } from "@/app/_types";
import TrendList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 3;

export default async function TrendListContainer() {
  const trends = await get<Trend[]>({
    url: "/api/trends",
    queryParams: { limit: INITIAL_NUMBER_OF_USERS },
  });

  return <TrendList trends={trends} />;
}
