import { get } from "@/lib/utils/fetcher";
import type { SuccessResponse, User } from "@/types";
import LoginForm from "./presentational";

export default async function LoginFormContainer() {
  const { data: user } = await get<SuccessResponse<User>>({
    url: "/api/users/random",
    cache: "no-store",
  });
  return <LoginForm guest={user} />;
}
