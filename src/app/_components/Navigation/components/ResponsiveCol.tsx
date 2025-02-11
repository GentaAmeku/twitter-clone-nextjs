"use client";

import { useIsMobile } from "@/app/_lib/hooks";
import { Col } from "@/app/_lib/mantine/core";
import type { ReactNode } from "react";

type ResponsiveColProps = {
	children: ReactNode;
};

export default function ResponsiveCol(props: ResponsiveColProps) {
	const isMoblie = useIsMobile();
	return (
		<Col span={isMoblie ? 1 : 2.7} className="border-r h-screen">
			{props.children}
		</Col>
	);
}
