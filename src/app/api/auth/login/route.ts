import { usersDb } from "@/app/api/_db";
import type { ResponseData, User } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const user = usersDb
    .getAll()
    .find(
      (user) => user.email === body.email && user.password === body.password,
    );

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Account not found",
          code: "NOT_FOUND",
        },
      },
      { status: 404 },
    );
  }

  //　FIXME: Change to JWT token in the future
  const updatedUser = usersDb.update(user.id, { isLogin: true }) as User;

  const response: ResponseData<User> = {
    success: true,
    data: updatedUser,
  };

  return Response.json(response);
}
