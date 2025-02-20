import { IconRepeat } from "@tabler/icons-react";
import ActionIcon from "../../components/ActionIcon";

type RepostProps = {
  children: React.ReactNode;
};

export default function Repost({ children }: RepostProps) {
  return <ActionIcon icon={<IconRepeat size={18} />}>{children}</ActionIcon>;
}
