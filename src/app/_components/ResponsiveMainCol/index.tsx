"use client";

import { useIsMd } from "@/app/_lib/hooks";
import { Col } from "@/app/_lib/mantine/core";

type ResponsiveStackProps = {
	children: React.ReactNode;
};

export default function ResponsiveMainCol(props: ResponsiveStackProps) {
	const isMd = useIsMd();
	if (isMd) return <Col span={12}>{props.children}</Col>;
	return (
		<Col span="content" className="min-w-[600px]">
			{props.children}
		</Col>
	);
}
