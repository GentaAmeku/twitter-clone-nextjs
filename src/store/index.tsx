"use client";

import { Provider as JotaiProvider } from "jotai";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<MantineProvider theme={theme}>
			<JotaiProvider>{children}</JotaiProvider>
		</MantineProvider>
	);
}
