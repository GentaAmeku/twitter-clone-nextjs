import { usersDb } from "@/app/api/_db";
import { LOGIN_USER_ID } from "@/constants";

export function GET(request: Request) {
  const me = usersDb.get((d) => d.id === LOGIN_USER_ID);
  return Response.json(me);
}
