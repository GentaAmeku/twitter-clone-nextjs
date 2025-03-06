import type { ErrorResponse } from "@/types";
import { NextResponse } from "next/server";

export function handleError(error: unknown): Response {
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      message: error instanceof Error ? error.message : "Internal Server Error",
      code: "SERVER_ERROR",
    },
  };

  return NextResponse.json(errorResponse, { status: 500 });
}
