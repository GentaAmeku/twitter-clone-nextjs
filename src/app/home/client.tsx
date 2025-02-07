"use client";

import HeaderBox from "@/components/HeaderBox";
import PostList from "@/components/PostList";
import Tabs from "@/components/Tabs";

export default function Home() {
	return (
		<>
			<HeaderBox>
				<Tabs>
					<Tabs.A>
						<PostList />
					</Tabs.A>
					<Tabs.B>Messages tab content</Tabs.B>
				</Tabs>
			</HeaderBox>
		</>
	);
}
