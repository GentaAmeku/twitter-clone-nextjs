import { postsDb } from "@/app/api/_db";
import type { PostWithUser, ResponseData } from "@/types";
import { NextResponse } from "next/server";
import { handleError } from "../../_utils/errorHandler";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "post not found",
            code: "NOT_FOUND",
          },
        },
        { status: 404 },
      );
    }
    const post = postsDb.get((post) => post.id === id);

    const response: ResponseData<PostWithUser | undefined> = {
      success: true,
      data: post,
    };

    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
