import type { Post, PostWithUser, User } from "@/types";
import { postsDb, usersDb } from "../_db";

const mergeUser = (posts: Post[], users: readonly User[]): PostWithUser[] => {
  return posts.map((post) => {
    const user = users.find((u) => u.user_id === post.user_id);
    return { ...post, user };
  });
};

export const getAllPostsWithUsers = () => {
  const posts = postsDb.getAll();
  const users = usersDb.getAll();
  return mergeUser(posts, users);
};
