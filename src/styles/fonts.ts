import { Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";

const notojp = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-notojp",
	display: "swap",
});

const kiwi = localFont({
	src: "../assets/fonts/KiwiMaru-Regular.ttf",
	variable: "--font-kiwi",
	display: "swap",
});

export { notojp, kiwi };
