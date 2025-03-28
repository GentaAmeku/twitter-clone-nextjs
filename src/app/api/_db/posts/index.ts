import { getRandomInt } from "@/lib/utils";
import { dayjs } from "@/lib/utils/dayjs";
import type { Post, Trend, User } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { type Model, createDatabase } from "../createDatabase";

const generateMockPosts = (
  trends: readonly Trend[],
  users: readonly User[],
): Post[] => {
  const now = dayjs();
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
          user_id: (users.at(getRandomInt(users.length - 1)) as User).user_id,
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
  const db = createDatabase<Post>(posts);
  return db();
}
