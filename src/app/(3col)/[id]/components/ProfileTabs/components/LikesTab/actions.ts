"use server";

import { get } from "@/lib/utils/fetcher";
import type { PostsResponse, SuccessResponse } from "@/types";

export const fetchMyLikes = async (path: string) => {
  const { data: response } = await get<SuccessResponse<PostsResponse>>({
    url: path,
  });
  return response;
};
