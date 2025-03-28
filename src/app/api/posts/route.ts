import { postsDb } from "@/app/api/_db";
import { sortByTime } from "@/lib/utils";
import { dayjs } from "@/lib/utils/dayjs";
import { get } from "@/lib/utils/fetcher";
import type {
  PostWithUser,
  PostsResponse,
  ResponseData,
  SuccessResponse,
  User,
} from "@/types";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { handleError } from "../_utils/errorHandler";

const generatePostData = (text: string, user: User): PostWithUser => {
  const now = dayjs();
  return {
    id: uuidv4(),
    text,
    reply: 0,
    repost: 0,
    hearts: 0,
    views: 0,
    time: now,
    fromNow: now.fromNow(),
    user_id: user.user_id,
    user,
  };
};

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 1000) : undefined;

    const posts = postsDb.getAll();
    const sortedPosts = sortByTime(posts);

    const i = sortedPosts.findIndex((d) => d.id === cursor);
    const offset = i === -1 ? 0 : i + 1;

    const result =
      limit !== undefined
        ? sortedPosts.slice(offset, offset + limit)
        : sortedPosts;

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

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const { data: me } = await get<SuccessResponse<User>>({
      url: "/api/users/me",
    });
    const postData = generatePostData(data.text as string, me);

    postsDb.insert(postData);

    const response: ResponseData<PostWithUser> = {
      success: true,
      data: postData,
    };
    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
