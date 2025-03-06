import { usersDb } from "@/app/api/_db";
import { handleError } from "@/app/api/_utils/errorHandler";
import { getRandomInt } from "@/lib/utils";
import type { ResponseData, User } from "@/types";

export function GET(request: Request) {
  try {
    const randomUsers = usersDb.getAll();
    const user = randomUsers.at(getRandomInt(randomUsers.length)) as User;
    const response: ResponseData<User> = {
      success: true,
      data: user,
    };
    return Response.json(response);
  } catch (error) {
    return handleError(error);
  }
}
