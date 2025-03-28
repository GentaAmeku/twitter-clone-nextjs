"use client";

import { useIsMd } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type ResponsiveContainerProps = {
  children: React.ReactNode;
};

export default function ResponsiveContainer(props: ResponsiveContainerProps) {
  const isMd = useIsMd();
  return (
    <div className={cn("flex-1 py-25", { "px-20": !isMd, "px-10": isMd })}>
      {props.children}
    </div>
  );
}
