"use server";

import { post } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
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

  // debug
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const { success } = await post<
      SuccessResponse<User>,
      Pick<User, "email" | "password">
    >({
      url: "/api/auth/login",
      body: submission.value,
    });

    if (!success) return submission.reply({ formErrors: ["Login failed"] });
  } catch (error) {
    return submission.reply({ formErrors: [(error as Error).message] });
  }

  redirect("/home");
}
