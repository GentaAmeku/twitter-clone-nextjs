import { formatNumber } from "@/app/_lib/utils";
import { IconBrandLine } from "@tabler/icons-react";
import ActionIcon from "../components/ActionIcon";

type ReplyProps = {
	children: React.ReactNode;
};

export default function Reply({ children }: ReplyProps) {
	return (
		<ActionIcon icon={<IconBrandLine size={18} />}>
			{formatNumber(children as number)}
		</ActionIcon>
	);
}
