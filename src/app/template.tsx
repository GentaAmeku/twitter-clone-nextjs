"use client";

import Aside from "@/components/Aside";
import Navigation from "@/components/Navigation";
import { useIsMobile } from "@/hooks";
import { PAGE_SIZE } from "@/styles/layout";
import { Container, Grid } from "@mantine/core";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isMoblie = useIsMobile();
	return (
		<Container px={0} size={PAGE_SIZE}>
			<Grid gutter={0} align="flex-start">
				<Grid.Col span={isMoblie ? 1 : 2.7} className="border-r h-screen">
					<Navigation />
				</Grid.Col>
				<Grid.Col span="auto">{children}</Grid.Col>
				<Grid.Col
					span={3.7}
					className="hidden md:inline-block border-l h-screen"
				>
					<Aside />
				</Grid.Col>
			</Grid>
		</Container>
	);
}
