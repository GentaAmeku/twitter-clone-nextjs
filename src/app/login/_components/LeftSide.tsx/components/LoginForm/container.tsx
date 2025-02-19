"use server";

import type { User } from "@/lib/msw/handlers/types";
import LoginForm from "./presentational";

export default async function LoginFormContainer() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/user/16c27134-33e2-2325-0847-e2d51b20cabb`,
	);

	const debugUser = (await res.json()) as User;

	return <LoginForm guest={debugUser} />;
}
