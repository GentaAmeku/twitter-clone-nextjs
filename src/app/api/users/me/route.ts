import { usersDb } from "@/app/api/_db";
import type { ResponseData, User } from "@/types";
import { NextResponse } from "next/server";
import { handleError } from "../../_utils/errorHandler";

export function GET(request: Request) {
  try {
    const user = usersDb.get((u) => u.isLogin);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "Unauthorized: User not logged in",
            code: "UNAUTHORIZED",
          },
        },
        { status: 401 },
      );
    }

    const response: ResponseData<User> = {
      success: true,
      data: user,
    };
    return NextResponse.json(response);
  } catch (error) {
    return handleError(error);
  }
}
