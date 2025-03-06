import { usersDb } from "@/app/api/_db";
import type { ResponseData, User } from "@/types";
import { type NextRequest, NextResponse } from "next/server";
import { handleError } from "../../_utils/errorHandler";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ user_id: string }> },
) {
  try {
    const user_id = (await params).user_id;
    const user = usersDb.get((user) => user.user_id === user_id);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "User not found",
            code: "NOT_FOUND",
          },
        },
        { status: 404 },
      );
    }

    const response: ResponseData<User> = {
      success: true,
      data: user,
    };

    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
