"use server";

import { get } from "@/app/_lib/utils/fetcher";
import type { User } from "@/app/_types";
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

  const users = await get<User[]>({ url: "/api/users" });

  // debug
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const hasUser = users.find((user) => {
    const { email, password } = submission.value;
    return user.email === email && user.password === password;
  });

  if (!hasUser) return submission.reply({ formErrors: ["Account not found."] });

  redirect("/home");
}
