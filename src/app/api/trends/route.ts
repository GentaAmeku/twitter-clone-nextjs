import { trendsDb } from "@/app/api/_db";
import type { ResponseData, Trend } from "@/types";
import type { NextRequest } from "next/server";
import { handleError } from "../_utils/errorHandler";

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const offset = Number(searchParams.get("offset") || 0);
    const limit = Number(searchParams.get("limit") || 10);
    const trends = trendsDb.getAll();
    const slicedPosts = trends.slice(offset, offset + limit);

    const response: ResponseData<Trend[]> = {
      success: true,
      data: slicedPosts,
    };
    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
