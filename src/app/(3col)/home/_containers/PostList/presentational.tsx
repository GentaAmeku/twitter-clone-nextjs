import PostCard from "./components/PostCard";

export default function PostList() {
	return (
		<div>
			{[...Array(30).keys()].map((k) => (
				<PostCard key={k} />
			))}
			{/* <PostCard /> */}
		</div>
	);
}
