import { postsDb, usersDb } from "@/app/api/_db";
import { handleError } from "@/app/api/_utils/errorHandler";
import type { ResponseData, UsersResponse } from "@/types";
import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const search = searchParams.get("search");
    const limit = limitParam ? Math.min(Number(limitParam), 1000) : undefined;

    if (!search) {
      return Response.json({
        success: false,
        error: "search is required",
      });
    }

    const posts = postsDb.getAll();
    const users = usersDb.getAll();

    const userIds = posts
      .filter((post) => post.text.toLowerCase().includes(search.toLowerCase()))
      .map((post) => post.user_id);
    const userIdsSet = new Set(userIds);
    const targetUsers = users.filter((user) => userIdsSet.has(user.user_id));

    const i = targetUsers.findIndex((d) => d.id === cursor);
    const offset = i === -1 ? 0 : i + 1;
    const result =
      limit !== undefined
        ? targetUsers.slice(offset, offset + limit)
        : targetUsers;

    const response: ResponseData<UsersResponse> = {
      success: true,
      data: {
        data: result,
        next_cursor: result.at(-1)?.id || "",
        has_next: result.length > 0,
      },
    };
    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
