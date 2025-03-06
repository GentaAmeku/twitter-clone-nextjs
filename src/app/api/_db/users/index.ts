import { getRandomInt } from "@/lib/utils";
import type { User } from "@/types";
import dayjs from "dayjs";
import { generateUsername } from "unique-username-generator";
import { v4 as uuidv4 } from "uuid";
import { createDatabase } from "../createDatabase";

const now = dayjs();

const basePassword = "VMhn4QCgWZej";
const USERS_COUNT = 100;
const NUMBER_OF_USER = 25;

const users: User[] = [
  ...Array(USERS_COUNT)
    .keys()
    .map((k) => {
      const username = generateUsername("", 0, 12);
      const created_at = now.add(-getRandomInt(24 * 360), "h");
      return {
        id: uuidv4(),
        name: username,
        user_id: `${username}${k}`,
        email: `${username}@gmail.com`,
        password: `${basePassword}${k}`,
        profile:
          "Frontend Engineer / React / TypeScript / Next.js / Tailwind CSS",
        following: [],
        followers: [],
        isLogin: false,
        created_at,
      };
    }),
];

const appendFollowers = (usres: User[]) =>
  usres.map((user) => {
    const offset = getRandomInt(USERS_COUNT - NUMBER_OF_USER);
    const followers = users.slice(offset, offset + NUMBER_OF_USER);
    return {
      ...user,
      followers,
    };
  });

const appendFollowing = (usres: User[]) =>
  usres.map((user) => {
    const offset = getRandomInt(USERS_COUNT - NUMBER_OF_USER);
    const following = users.slice(offset, offset + NUMBER_OF_USER);
    return {
      ...user,
      following,
    };
  });

export default createDatabase<User>(appendFollowers(appendFollowing(users)));
