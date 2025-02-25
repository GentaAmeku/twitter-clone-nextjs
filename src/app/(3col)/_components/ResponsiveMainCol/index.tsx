"use client";

import { useIsMd } from "@/lib/hooks";
import { Col } from "@/lib/mantine/core";
import { cn } from "@/lib/utils";

type ResponsiveStackProps = {
  children: React.ReactNode;
};

export default function ResponsiveMainCol(props: ResponsiveStackProps) {
  const isMd = useIsMd();
  return (
    <Col
      span={!isMd ? "content" : 12}
      className={cn({ "min-w-[600px]": !isMd })}
    >
      {props.children}
    </Col>
  );
}
