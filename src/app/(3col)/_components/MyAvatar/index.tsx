import { Avatar } from "@/app/_lib/mantine/core";

type MyavatarProps = {
  size?: number | string;
};

export default function MyAvatar({ size = 45 }: MyavatarProps) {
  return <Avatar color="cyan" size={size} src="/images/avatar.jpg" />;
}
