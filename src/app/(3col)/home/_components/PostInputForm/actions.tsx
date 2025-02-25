"use server";

import { post as fetchPost } from "@/app/_lib/utils/fetcher";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { postSchema } from "./schema";

export async function post(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    await fetchPost({
      url: "/api/posts",
      body: formData,
    });
  } catch (error) {
    if (error instanceof Error) {
      return submission.reply({ formErrors: [error.message] });
    }
  }

  revalidatePath("/home");

  return { status: "success" as const, reply: [] as string[] };
}
