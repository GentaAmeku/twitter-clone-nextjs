"use server";

import type { Trend } from "@/app/_types";
import TrendList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 3;

export default async function TrendListContainer() {
  const trends = (await fetch(
    `${process.env.API_SERVER_URL}/api/trends?${new URLSearchParams({
      limit: INITIAL_NUMBER_OF_USERS.toString(),
    })}`,
  ).then((res) => res.json())) as Trend[];

  return <TrendList trends={trends} />;
}
