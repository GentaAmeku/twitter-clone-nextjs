import { IconHeart } from "@tabler/icons-react";
import ActionIcon from "./ActionIcon";

type ViewsProps = {
  children: React.ReactNode;
};

export default function Views({ children }: ViewsProps) {
  return <ActionIcon icon={<IconHeart size={18} />}>{children}</ActionIcon>;
}
