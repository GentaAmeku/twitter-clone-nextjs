import type { User } from "@/app/_types";
import { generateUsername } from "unique-username-generator";
import { v4 as uuidv4 } from "uuid";

export const mockUsers = [
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

const loginUserName = generateUsername("", 0, 12);

export const generateLoginUser = (): User => {
  return {
    id: "00000000-0000-0000-0000-000000000000",
    name: loginUserName,
    user_id: `@${loginUserName}`,
    email: `${loginUserName}@gmail.com`,
    password: "VMhn4QCgWZej",
    following: [],
    followers: [],
  };
};

export const users: readonly User[] = Object.freeze([
  generateLoginUser(),
  ...mockUsers,
]);
