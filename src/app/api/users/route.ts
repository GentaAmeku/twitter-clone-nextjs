import type { NextRequest } from "next/server";
import { users } from "./_db";

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const offset = Number(searchParams.get("offset") || 0);
	const limit = Number(searchParams.get("limit") || 10);

	const email = searchParams.get("email") as string;
	const password = searchParams.get("password") as string;

	if (email || password) {
		const user = users.find((user) => {
			return user.email === email && user.password === password;
		});
		return Response.json(user);
	}

	const slicedUsers = users.slice(offset, offset + limit);
	return Response.json(slicedUsers);
}
