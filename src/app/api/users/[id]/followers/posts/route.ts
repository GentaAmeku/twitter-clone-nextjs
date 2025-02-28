import { postsDb, usersDb } from "@/app/api/_db";
import { sortByTime } from "@/lib/utils";
import type { PostsResponse, User } from "@/types";
import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    if (!id) {
      return new Response(null, { status: 404 });
    }
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 100) : undefined;

    const { followers } = usersDb.get((user) => user.id === id) as User;
    const posts = postsDb.getAll();
    const followersPosts = posts.filter((post) =>
      followers.some((u) => u.user_id === post.user_id),
    );
    const sorted = sortByTime(followersPosts);

    const i = sorted.findIndex((d) => d.id === cursor);
    const offset = i === -1 ? 0 : i + 1;

    const result =
      limit !== undefined ? sorted.slice(offset, offset + limit) : posts;

    const response: PostsResponse = {
      data: result,
      next_cursor: result.at(-1)?.id || "",
      has_next: result.length > 0,
    };
    return Response.json(response);
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, {
        status: 400,
      });
    }
  }
}
