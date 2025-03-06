"use server";

import { get } from "@/lib/utils/fetcher";
import type { PostsResponse, SuccessResponse } from "@/types";

export const fetchMyPost = async (path: string) => {
  const { data: response } = await get<SuccessResponse<PostsResponse>>({
    url: path,
  });
  return response;
};
