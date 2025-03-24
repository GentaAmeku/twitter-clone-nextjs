import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, Trend } from "@/types";
import TrendList from "./presentational";

const INITIAL_NUMBER_OF_USERS = 30;

export default async function TrendListContainer() {
  const { data: trends } = await get<SuccessResponse<Trend[]>>({
    url: "/api/trends",
    queryParams: { limit: INITIAL_NUMBER_OF_USERS },
    cache: "no-store",
  });

  return <TrendList trends={trends} />;
}
