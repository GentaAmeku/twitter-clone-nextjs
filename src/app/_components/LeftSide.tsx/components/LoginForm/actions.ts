"use server";

import type { User } from "@/lib/msw/handlers/types";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { loginSchema } from "./schema";

export async function login(prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, {
		schema: loginSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	const users = (await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users`,
	).then((res) => res.json())) as User[];

	// debug
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const hasUser = users.find((user) => {
		const { email, password } = submission.value;
		return user.email === email && user.password === password;
	});

	if (!hasUser) return submission.reply({ formErrors: ["Account not found."] });

	redirect("/home");
}
