"use client";

import { MantineProvider, createTheme } from "@/lib/mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
