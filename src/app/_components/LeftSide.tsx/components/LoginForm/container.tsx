"use server";

import type { User } from "@/app/_types";
import LoginForm from "./presentational";

export default async function LoginFormContainer() {
	const res = await fetch(
		`${process.env.API_SERVER_URL}/api/users/00000000-0000-0000-0000-000000000000`,
	);

	const debugUser = (await res.json()) as User;

	return <LoginForm guest={debugUser} />;
}
