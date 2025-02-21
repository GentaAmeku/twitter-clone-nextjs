import { http, HttpResponse, type RequestHandler } from "msw";
import userHandlers from "./routes/users";

export const handlers: RequestHandler[] = [
	...userHandlers,
	http.get("/api/error", () => {
		return new HttpResponse(null, { status: 500 });
	}),
];
