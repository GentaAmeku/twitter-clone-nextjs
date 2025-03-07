import { NextResponse } from "next/server";

export function NotFound({ message }: { message?: string } = {}): Response {
  return NextResponse.json(
    {
      success: false,
      error: {
        message: message || "Not found",
        code: "NOT_FOUND",
      },
    },
    { status: 404 },
  );
}
