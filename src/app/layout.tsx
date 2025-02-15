import Aside from "@/app/_components/Aside";
import Navigation from "@/app/_components/Navigation";
import { Col, Container, Grid } from "@/app/_lib/mantine/core";
import { AppProvider } from "@/app/_lib/store";
import { notojp } from "@/app/_styles/fonts";
import { PAGE_SIZE } from "@/app/_styles/layout";

import "./globals.css";
import "@mantine/core/styles.css";
import ResponsiveMainCol from "./_components/ResponsiveMainCol";

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
						<Grid gutter={0} justify="center">
							<Navigation />
							<ResponsiveMainCol>{children}</ResponsiveMainCol>
							<Col
								span={3.4}
								className="sticky top-0 self-start hidden lg:inline-block"
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
