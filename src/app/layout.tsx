import Aside from "@/app/_components/Aside";
import Navigation from "@/app/_components/Navigation";
import { Col, Container, Grid } from "@/app/_lib/mantine/core";
import { AppProvider } from "@/app/_lib/store";
import { notojp } from "@/app/_styles/fonts";
import { PAGE_SIZE } from "@/app/_styles/layout";

import "./globals.css";
import "@mantine/core/styles.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={`${notojp.variable}`}>
			<body>
				<AppProvider>
					<Container px={0} size={PAGE_SIZE}>
						<Grid gutter={0}>
							<Navigation />
							<Col span="auto">{children}</Col>
							<Col
								span={3.7}
								className="sticky top-0 self-start hidden md:inline-block"
							>
								<Aside />
							</Col>
						</Grid>
					</Container>
				</AppProvider>
			</body>
		</html>
	);
}
