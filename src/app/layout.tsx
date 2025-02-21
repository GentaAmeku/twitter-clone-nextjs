import { AppProvider } from "@/app/_lib/store";
import { notojp } from "@/app/_styles/fonts";

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
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
