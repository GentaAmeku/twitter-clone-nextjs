"use server";

import { get } from "@/lib/utils/fetcher";
import type { User } from "@/types";
import LoginForm from "./presentational";

export default async function LoginFormContainer() {
  const debugUser = await get<User>({ url: "/api/users/me" });
  return <LoginForm guest={debugUser} />;
}
