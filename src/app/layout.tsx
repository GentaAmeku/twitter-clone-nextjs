import { AppProvider } from "@/store";
import { kiwi, notojp } from "@/styles/fonts";

import "./globals.css";
import "@mantine/core/styles.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={`${notojp.variable} ${kiwi.variable} light`}>
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
