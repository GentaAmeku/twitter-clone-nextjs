import { usersDb } from "@/app/api/_db";
import { handleError } from "@/app/api/_utils/errorHandler";
import type { ResponseData, User } from "@/types";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ user_id: string }> },
) {
  try {
    const user_id = (await params).user_id;
    if (!user_id) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "user not found",
            code: "NOT_FOUND",
          },
        },
        { status: 404 },
      );
    }
    const { followers } = usersDb.get(
      (user) => user.user_id === user_id,
    ) as User;

    const response: ResponseData<User[]> = {
      success: true,
      data: followers,
    };
    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
