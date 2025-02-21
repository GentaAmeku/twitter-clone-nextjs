import { http, HttpResponse, type RequestHandler } from "msw";
import { generateUsername } from "unique-username-generator";
import { v4 as uuidv4 } from "uuid";
import type { User } from "../types";

export const mockUsers = [
  ...Array(100 - 1)
    .keys()
    .map((k) => {
      const username = generateUsername();
      return {
        id: uuidv4(),
        name: generateUsername(),
        user_id: `@${username}${k}`,
        email: `${username}@gmail.com`,
        password: `VMhn4QCgWZej${k}`,
        following: [],
        followers: [],
      };
    }),
];

const loginUserName = generateUsername();

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

const users: User[] = [generateLoginUser(), ...mockUsers];

const userHandlers: RequestHandler[] = [
  http.get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users`, () => {
    return HttpResponse.json<User[]>(users);
  }),
  http.get(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/:id`,
    ({ params }) => {
      const { id } = params;
      if (!id) {
        return new HttpResponse(null, { status: 404 });
      }
      const user = users.find((user) => user.id === id);
      return HttpResponse.json<User>(user);
    },
  ),
];

export default userHandlers;
