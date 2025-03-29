import { formatNumber } from "@/lib/utils";
import { IconChartColumn } from "@tabler/icons-react";
import ActionIcon from "./ActionIcon";

type ViewsProps = {
  children: React.ReactNode;
};

export default function Views({ children }: ViewsProps) {
  return (
    <ActionIcon icon={<IconChartColumn size={18} />}>
      {formatNumber(children as number)}
    </ActionIcon>
  );
}
