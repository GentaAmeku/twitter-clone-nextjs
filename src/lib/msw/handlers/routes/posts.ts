import { http, HttpResponse, type RequestHandler } from "msw";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import type { Post } from "../types";
import { v4 as uuidv4 } from "uuid";
import { generateLoginUser, mockUsers } from "./users";

dayjs.locale(ja);
const now = dayjs();

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const generateMockPosts = (): Post[] => {
	return [
		...Array(20)
			.keys()
			.map((k) => {
				return {
					id: uuidv4(),
					text: "",
					reply: getRandomInt(10),
					repost: getRandomInt(50),
					hearts: getRandomInt(1000),
					views: getRandomInt(20000),
					time: now.add(-k - getRandomInt(365 / 2)),
					user_id: mockUsers[k].user_id,
				};
			}),
	];
};

const generateLoginUserPosts = (): Post[] => {
	return [
		...Array(10)
			.keys()
			.map((k) => {
				return {
					id: uuidv4(),
					text: "",
					reply: getRandomInt(20),
					repost: getRandomInt(100),
					hearts: getRandomInt(2000),
					views: getRandomInt(30000),
					time: now.add(-k - getRandomInt(365 / 2)),
					user_id: generateLoginUser().user_id,
				};
			}),
	];
};

const posts: Post[] = [...generateLoginUserPosts(), ...generateMockPosts()];

const postsHandlers: RequestHandler[] = [
	http.get(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/posts`,
		({ request }) => {
			const url = new URL(request.url);
			const start = url.searchParams.get("start") || 0;
			const limit = url.searchParams.get("limit") || 10;
			const slicedPosts = posts.slice(+start, +limit);
			return HttpResponse.json<Post[]>(slicedPosts);
		},
	),
	http.get(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/posts/:id`,
		async ({ params }) => {
			const { id } = params;
			if (!id) {
				return new HttpResponse(null, { status: 404 });
			}
			const user = posts.find((post) => post.id === id);
			return HttpResponse.json<Post>(user);
		},
	),
];

export default postsHandlers;
