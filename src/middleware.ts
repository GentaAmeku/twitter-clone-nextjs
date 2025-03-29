import { get } from "@/lib/utils/fetcher";
import { type NextRequest, NextResponse } from "next/server";
import type { SuccessResponse, User } from "./types";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const path = new URL(request.url).pathname;

  if (path === "/login") return response;

  try {
    const { data: user } = await get<SuccessResponse<User>>({
      url: "/api/users/me",
    });
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (path === "/")
      return NextResponse.redirect(new URL("/home", request.url));

    return response;
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
