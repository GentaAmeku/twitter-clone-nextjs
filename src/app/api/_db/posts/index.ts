import { getRandomInt } from "@/lib/utils";
import type { Post, PostWithUser, Trend, User } from "@/types";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import { v4 as uuidv4 } from "uuid";
import { type Model, createDatabase } from "../createDatabase";

dayjs.extend(relativeTime);
dayjs.locale(en);
const now = dayjs();

const mergeUser = (posts: Post[], users: readonly User[]): PostWithUser[] => {
  return posts.map((post) => {
    const user = users.find((u) => u.user_id === post.user_id);
    return { ...post, user };
  });
};

const generateMockPosts = (
  trends: readonly Trend[],
  users: readonly User[],
): Post[] => {
  return [
    ...Array(100 - 1)
      .keys()
      .map((k) => {
        const time = now.add(-getRandomInt(24 * 3), "h");
        return {
          id: uuidv4(),
          text: trends[getRandomInt(trends.length - 1)].name,
          reply: getRandomInt(10),
          repost: getRandomInt(50),
          hearts: getRandomInt(1000),
          views: getRandomInt(20000),
          time,
          fromNow: time.fromNow(),
          user_id: users[k].user_id,
        };
      }),
  ];
};

export default function createPostsDatabase(
  usersDb: Model<User>,
  trendsDb: Model<Trend>,
) {
  const users = usersDb.getAll();
  const trends = trendsDb.getAll();
  const posts = generateMockPosts(trends, users);
  const db = createDatabase<PostWithUser>(mergeUser(posts, users));
  return db();
}
