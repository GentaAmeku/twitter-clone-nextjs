import type { NextRequest } from "next/server";
import { trendsDb } from "../_db";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = Number(searchParams.get("offset") || 0);
  const limit = Number(searchParams.get("limit") || 10);
  const trends = trendsDb.getAll();
  const slicedPosts = trends.slice(offset, offset + limit);
  return Response.json(slicedPosts);
}
