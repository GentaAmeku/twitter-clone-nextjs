"use server";

import { get } from "@/app/_lib/utils/fetcher";
import type { User } from "@/app/_types";
import LoginForm from "./presentational";

export default async function LoginFormContainer() {
  const debugUser = await get<User>({ url: "/api/users/me" });
  return <LoginForm guest={debugUser} />;
}
