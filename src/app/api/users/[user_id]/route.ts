import { usersDb } from "@/app/api/_db";
import { handleError } from "@/app/api/_utils/errorHandler";
import { NotFound } from "@/app/api/_utils/notFound";
import type { ResponseData, User } from "@/types";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ user_id: string }> },
) {
  try {
    const user_id = (await params).user_id;
    const user = usersDb.get((user) => user.user_id === user_id);

    if (!user) {
      return NotFound({ message: "User not found" });
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
