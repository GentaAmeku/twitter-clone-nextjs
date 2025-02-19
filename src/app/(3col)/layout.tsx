import Aside from "@/app/(3col)/_components/Aside";
import Navigation from "@/app/(3col)/_components/Navigation";
import { Col, Container, Grid } from "@/app/_lib/mantine/core";
import { PAGE_SIZE } from "@/app/_styles/layout";
import ResponsiveMainCol from "./_components/ResponsiveMainCol";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
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
	);
}
