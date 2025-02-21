import { getRandomInt } from "@/app/_lib/utils";
import type { Post } from "@/app/_types";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import { v4 as uuidv4 } from "uuid";
import { trends } from "../trends/_db";
import { generateLoginUser, mockUsers, users } from "../users/_db";

dayjs.extend(relativeTime);
dayjs.locale(en);
const now = dayjs();

const generateMockPosts = (): Post[] => {
	return [
		...Array(100)
			.keys()
			.map((k) => {
				const time = now.add(-getRandomInt(24 * 3), "h");
				return {
					id: uuidv4(),
					text: trends[getRandomInt(trends.length)]?.name,
					reply: getRandomInt(10),
					repost: getRandomInt(50),
					hearts: getRandomInt(1000),
					views: getRandomInt(20000),
					time,
					fromNow: time.fromNow(),
					user_id: mockUsers[k]?.user_id,
				};
			}),
	];
};

const mergeUser = (posts: Post[]): Post[] => {
	return posts.map((post) => {
		const user = users.find((u) => u.user_id === post.user_id);
		return { ...post, user };
	});
};

const sortByTime = (posts: Post[]): Post[] => {
	return posts.sort((a, b) => {
		const [timeA, timeB] = [dayjs(a.time), dayjs(b.time)];
		return timeA.isAfter(timeB) ? -1 : 1;
	});
};

const generateLoginUserPosts = (): Post[] => {
	return [
		...Array(10)
			.keys()
			.map((k) => {
				const time = now.add(-getRandomInt(24 * 3), "h");
				return {
					id: uuidv4(),
					text: trends[getRandomInt(trends.length)]?.name,
					reply: getRandomInt(20),
					repost: getRandomInt(100),
					hearts: getRandomInt(2000),
					views: getRandomInt(30000),
					time,
					fromNow: time.fromNow(),
					user_id: generateLoginUser()?.user_id,
				};
			}),
	];
};

export const posts: readonly Post[] = Object.freeze(
	sortByTime(mergeUser([...generateLoginUserPosts(), ...generateMockPosts()])),
);
