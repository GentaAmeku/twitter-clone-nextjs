import { http, HttpResponse, type RequestHandler } from "msw";
import type { User } from "./types";

export const mockUsers: User[] = [
	{
		id: "16c27134-33e2-2325-0847-e2d51b20cabb",
		name: "Debug User",
		user_id: "debuguser",
		email: "debug.user1@gmail.com",
		password: "VMhn4QCgWZej",
		following: [],
		followers: [],
	},
	{
		id: "16c27134-33e2-2325-0847-e2d51b20cab2",
		name: "Debug User2",
		user_id: "debuguser2",
		email: "debug.user2@gmail.com",
		password: "VMhn4QCgWZej2",
		following: [],
		followers: [],
	},
];

export const handlers: RequestHandler[] = [
	http.get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users`, () => {
		return HttpResponse.json(mockUsers);
	}),
	http.get(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/user/:id`,
		({ params }) => {
			const { id } = params;
			if (!id) {
				return new HttpResponse(null, { status: 404 });
			}
			const user = mockUsers.find((mockUser) => mockUser.id === id);
			return HttpResponse.json<User>(user);
		},
	),
	http.get("/api/error", () => {
		return new HttpResponse(null, { status: 500 });
	}),
];
