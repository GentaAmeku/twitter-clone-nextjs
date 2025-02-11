import { Box } from "@/app/_lib/mantine/core";
import type { ReactNode } from "react";

type HeaderBoxProps = {
	children: ReactNode;
};

const HeaderBox = (props: HeaderBoxProps) => {
	return <Box className={"h-[64px] w-full"}>{props.children}</Box>;
};

export default HeaderBox;
