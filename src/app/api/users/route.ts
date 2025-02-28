import { usersDb } from "@/app/api/_db";
import type { NextRequest } from "next/server";

export type GetUserQueryParams = {
  search?: string;
  offset?: string;
  limit?: string;
  email?: string;
  password?: string;
};

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = Number(searchParams.get("offset") || 0);
  const search = searchParams.get("search");
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Math.min(Number(limitParam), 100) : undefined;
  const email = searchParams.get("email") as string;
  const password = searchParams.get("password") as string;

  const users = usersDb.getAll();

  if (email || password) {
    const user = users.find((user) => {
      return user.email === email && user.password === password;
    });
    return Response.json(user);
  }

  if (search) {
    const searchedUsers = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search) ||
        u.user_id.toLowerCase().includes(search),
    );
    return Response.json(searchedUsers);
  }

  const slicedUsers =
    limit !== undefined ? users.slice(offset, offset + limit) : users;

  return Response.json(slicedUsers);
}
