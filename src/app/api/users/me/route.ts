import { LOGIN_USER_ID } from "@/app/_constants";
import { usersDb } from "@/app/api/_db";

export function GET(request: Request) {
  const me = usersDb.get((d) => d.id === LOGIN_USER_ID);
  return Response.json(me);
}
