import { type NextRequest } from "next/server";
import { users } from "./_db";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("email") as string;
  const password = searchParams.get("password") as string;
  if (email || password) {
    const user = users.find((user) => {
      return user.email === email && user.password === password;
    });
    return Response.json(user);
  }
  return Response.json(users);
}
