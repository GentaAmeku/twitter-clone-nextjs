import type { User } from "@/app/_types";
import { postsDb, usersDb } from "@/app/api/_db";
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
    const offset = Number(searchParams.get("offset") || 0);
    const limit = Number(searchParams.get("limit") || 10);
    const { followers } = usersDb.get((user) => user.id === id) as User;
    const posts = postsDb.getAll();
    const followersPosts = posts.filter((post) =>
      followers.some((u) => u.user_id === post.user_id),
    );
    const slicedFollowersPosts = followersPosts.slice(offset, offset + limit);
    return Response.json(slicedFollowersPosts);
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, {
        status: 400,
      });
    }
  }
}
