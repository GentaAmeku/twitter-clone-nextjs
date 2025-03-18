import { Text } from "@/lib/mantine/core";
import { IconUser } from "@tabler/icons-react";
import NaviButton from "../NaviButton";

type ProfileButtonProps = {
  userId: string;
};

const ProfileLink = (props: ProfileButtonProps) => {
  return (
    <NaviButton icon={<IconUser size={28} />} href={`/${props.userId}`}>
      <Text size="xl" fw={600} inline>
        Profile
      </Text>
    </NaviButton>
  );
};

export default ProfileLink;
