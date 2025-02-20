import type { Dayjs } from "dayjs";

export type User = {
	id: string;
	name: string;
	user_id: string;
	created_at?: Date;
	email: string;
	password: string;
	following: [] | never[];
	followers: [] | never[];
};

export type Post = {
	id: string;
	text: string;
	reply: string;
	repost: string;
	hearts: string;
	views: string;
	time: Dayjs;
	fromNow: string;
	user_id: string;
	user?: User;
};
