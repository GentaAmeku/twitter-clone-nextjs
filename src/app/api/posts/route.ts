import { postsDb } from "@/app/api/_db";
import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = Number(searchParams.get("offset") || 0);
  const limit = Number(searchParams.get("limit") || 10);
  const posts = postsDb.getAll();
  const slicedPosts = posts.slice(offset, offset + limit);
  return Response.json(slicedPosts);
}
