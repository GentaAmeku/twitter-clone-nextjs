"use server";

import type { User } from "@/app/_types";
import RecommendUsers from "./presentational";

const INITIAL_NUMBER_OF_USERS = 3;

export default async function RecommendUsersContainer() {
	const users = (await fetch(
		`${process.env.API_SERVER_URL}/api/users?${new URLSearchParams({
			limit: INITIAL_NUMBER_OF_USERS.toString(),
		})}`,
	).then((res) => res.json())) as User[];

	return <RecommendUsers users={users} />;
}
