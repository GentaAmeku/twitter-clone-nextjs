import { Anchor as MantineAnchor, Text } from "@/lib/mantine/core";
import Link from "next/link";

type AnchorProps = {
  href: string;
  children: React.ReactNode;
};

export default function Anchor({ href, children }: AnchorProps) {
  return (
    <MantineAnchor href={href} component={Link} c="var(--color-gray-700)">
      <Text size="sm" c="var(--color-gray-600)">
        {children}
      </Text>
    </MantineAnchor>
  );
}
