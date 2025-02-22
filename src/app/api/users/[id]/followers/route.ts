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
    const { followers } = usersDb.get((user) => user.id === id) as User;
    return Response.json(followers);
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, {
        status: 400,
      });
    }
  }
}
