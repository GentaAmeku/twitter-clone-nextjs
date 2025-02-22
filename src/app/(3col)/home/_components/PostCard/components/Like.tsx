import { formatNumber } from "@/app/_lib/utils";
import { IconHeart } from "@tabler/icons-react";
import ActionIcon from "../components/ActionIcon";

type LikeProps = {
  children: React.ReactNode;
};

export default function Like({ children }: LikeProps) {
  return (
    <ActionIcon icon={<IconHeart size={18} />}>
      {formatNumber(children as number)}
    </ActionIcon>
  );
}
