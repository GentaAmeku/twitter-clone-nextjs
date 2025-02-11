import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-notojp",
	display: "swap",
});

export { notojp };
