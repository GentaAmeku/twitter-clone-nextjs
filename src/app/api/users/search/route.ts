import { usersDb } from "@/app/api/_db";
import type { ResponseData, User } from "@/types";
import type { NextRequest } from "next/server";
import { handleError } from "../../_utils/errorHandler";

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");

    if (!search) {
      return Response.json({
        success: false,
        error: "search is required",
      });
    }

    const users = usersDb.getAll();

    const searchedUsers = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.user_id.toLowerCase().includes(search.toLowerCase()),
    );
    const response: ResponseData<User[]> = {
      success: true,
      data: searchedUsers,
    };

    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
