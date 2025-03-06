import { IconUser } from "@tabler/icons-react";
import NaviButton from "../NaviButton";

type ProfileButtonProps = {
  userId: string;
};

const ProfileLink = (props: ProfileButtonProps) => {
  return (
    <NaviButton icon={<IconUser size={28} />} href={`/${props.userId}`}>
      Profile
    </NaviButton>
  );
};

export default ProfileLink;
