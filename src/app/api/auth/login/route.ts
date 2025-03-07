import { usersDb } from "@/app/api/_db";
import { NotFound } from "@/app/api/_utils/notFound";
import type { ResponseData, User } from "@/types";

export async function POST(request: Request) {
  const body = await request.json();
  const user = usersDb
    .getAll()
    .find(
      (user) => user.email === body.email && user.password === body.password,
    );

  if (!user) {
    return NotFound({ message: "Account not found" });
  }

  //　FIXME: Change to JWT token in the future
  const updatedUser = usersDb.update(user.id, { isLogin: true }) as User;

  const response: ResponseData<User> = {
    success: true,
    data: updatedUser,
  };

  return Response.json(response);
}
