import { handleError } from "@/app/api/_utils/errorHandler";
import { getAllPostsWithUsers } from "@/app/api/_utils/getAllPostsWithUsers";
import { sortByTime } from "@/lib/utils";
import type { PostsResponse, ResponseData } from "@/types";
import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const search = searchParams.get("q");
    const limit = limitParam ? Math.min(Number(limitParam), 1000) : undefined;

    if (!search) {
      return Response.json({
        success: false,
        error: "search is required",
      });
    }

    const posts = getAllPostsWithUsers();
    const sortedPosts = sortByTime(posts);

    const searchedPosts = sortedPosts.filter((post) =>
      post.text.toLowerCase().includes(search.toLowerCase()),
    );
    const i = searchedPosts.findIndex((d) => d.id === cursor);
    const offset = i === -1 ? 0 : i + 1;
    const result =
      limit !== undefined
        ? searchedPosts.slice(offset, offset + limit)
        : searchedPosts;

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
