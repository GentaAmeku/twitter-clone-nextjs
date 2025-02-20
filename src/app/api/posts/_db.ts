import type { Post } from "@/app/_types";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import relativeTime from "dayjs/plugin/relativeTime";
import { v4 as uuidv4 } from "uuid";
import { generateLoginUser, mockUsers, users } from "../users/_db";

dayjs.extend(relativeTime);
dayjs.locale(ja);
const now = dayjs();

const formatNumber = (num: number): string => {
	if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
	if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
	return num.toString();
};

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const generateMockPosts = (): Post[] => {
	return [
		...Array(20)
			.keys()
			.map((k) => {
				const time = now.add(-getRandomInt(24 * 3), "h");
				return {
					id: uuidv4(),
					text: "Random User Post",
					reply: formatNumber(getRandomInt(10)),
					repost: formatNumber(getRandomInt(50)),
					hearts: formatNumber(getRandomInt(1000)),
					views: formatNumber(getRandomInt(20000)),
					time,
					fromNow: time.fromNow(),
					user_id: mockUsers[k].user_id,
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
					text: "Login User Post",
					reply: formatNumber(getRandomInt(20)),
					repost: formatNumber(getRandomInt(100)),
					hearts: formatNumber(getRandomInt(2000)),
					views: formatNumber(getRandomInt(30000)),
					time,
					fromNow: time.fromNow(),
					user_id: generateLoginUser().user_id,
				};
			}),
	];
};

export const posts: readonly Post[] = Object.freeze(
	sortByTime(mergeUser([...generateLoginUserPosts(), ...generateMockPosts()])),
);
