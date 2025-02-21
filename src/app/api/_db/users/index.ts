import { getRandomInt } from "@/app/_lib/utils";
import type { User } from "@/app/_types";
import { generateUsername } from "unique-username-generator";
import { v4 as uuidv4 } from "uuid";
import { createDatabase } from "../createDatabase";

const users = [
  ...Array(100 - 1)
    .keys()
    .map((k) => {
      const username = generateUsername("", 0, 12);
      return {
        id: uuidv4(),
        name: username,
        user_id: `@${username}${k}`,
        email: `${username}@gmail.com`,
        password: `VMhn4QCgWZej${k}`,
        following: [],
        followers: [],
      };
    }),
];

export const LOGIN_USER_ID = "00000000-0000-0000-0000-000000000000";

const generateLoginUser = (): User => {
  const NUMBER_OF_USER = 50;
  const name = generateUsername("", 0, 12);
  const offset = getRandomInt(100 - NUMBER_OF_USER);
  const friends = users.slice(offset, offset + NUMBER_OF_USER);
  return {
    id: LOGIN_USER_ID,
    name: name,
    user_id: `@${name}`,
    email: `${name}@gmail.com`,
    password: "VMhn4QCgWZej",
    following: friends,
    followers: friends,
  };
};

export default createDatabase<User>([generateLoginUser(), ...users]);
