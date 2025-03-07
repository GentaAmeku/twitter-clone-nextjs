import { postsDb } from "@/app/api/_db";
import { NotFound } from "@/app/api/_utils/notFound";
import type { PostWithUser, ResponseData } from "@/types";
import { handleError } from "../../_utils/errorHandler";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    if (!id) {
      return NotFound({ message: "Post not found" });
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
