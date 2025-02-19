export type User = {
	id: string;
	name: string;
	user_id: string;
	created_at?: Date;
	email: string;
	password: string;
	following: [];
	followers: [];
};

export type post = {
	id: string;
	text: string;
	hearts: [];
	repost: [];
	replies: [];
	time: Date;
	user_id: string;
};
