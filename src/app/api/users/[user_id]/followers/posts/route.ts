import { postsDb, usersDb } from "@/app/api/_db";
import { handleError } from "@/app/api/_utils/errorHandler";
import { sortByTime } from "@/lib/utils";
import type { PostsResponse, ResponseData, User } from "@/types";
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
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 1000) : undefined;

    const { followers } = usersDb.get(
      (user) => user.user_id === user_id,
    ) as User;
    const posts = postsDb.getAll();
    const followersPosts = posts.filter((post) =>
      followers.some((u) => u.user_id === post.user_id),
    );

    const sorted = sortByTime(followersPosts);

    const i = sorted.findIndex((d) => d.id === cursor);
    const offset = i === -1 ? 0 : i + 1;

    const result =
      limit !== undefined ? sorted.slice(offset, offset + limit) : sorted;

    const response: ResponseData<PostsResponse> = {
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
