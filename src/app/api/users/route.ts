import { usersDb } from "@/app/api/_db";
import type { ResponseData, User } from "@/types";
import type { NextRequest } from "next/server";
import { handleError } from "../_utils/errorHandler";

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const offset = Number(searchParams.get("offset") || 0);
    const search = searchParams.get("search");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 1000) : undefined;
    const email = searchParams.get("email") as string;
    const password = searchParams.get("password") as string;
    const ids = searchParams.get("ids");

    const users = usersDb.getAll();

    if (email || password) {
      const targets = users.filter((user) => {
        return user.email === email && user.password === password;
      });
      const response: ResponseData<User[]> = {
        success: true,
        data: targets,
      };
      return Response.json(response);
    }

    if (ids) {
      const targets = users.filter((user) => ids.includes(user.user_id));
      const response: ResponseData<User[]> = {
        success: true,
        data: targets,
      };
      return Response.json(response);
    }

    if (search) {
      const searchedUsers = users.filter(
        (u) =>
          u.name.toLowerCase().includes(search) ||
          u.user_id.toLowerCase().includes(search),
      );
      const response: ResponseData<User[]> = {
        success: true,
        data: searchedUsers,
      };

      return Response.json(response);
    }

    const slicedUsers =
      limit !== undefined ? users.slice(offset, offset + limit) : users;

    const response: ResponseData<User[]> = {
      success: true,
      data: slicedUsers,
    };

    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
