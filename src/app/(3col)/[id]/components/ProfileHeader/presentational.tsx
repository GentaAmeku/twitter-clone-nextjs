import { Avatar, Button, Flex } from "@/lib/mantine/core";

type ProfileHeaderProps = {
  name: string;
};

export default function ProfileHeader({ name }: ProfileHeaderProps) {
  return (
    <Flex justify="right" className="p-4 w-full relative">
      <Avatar
        size={140}
        variant="filled"
        color="initials"
        name={name}
        key={name}
        className="!absolute left-5 bottom-0 z-1 border-4 border-white"
      />
      <Button variant="default" size="md" radius="xl">
        Edit Profile
      </Button>
    </Flex>
  );
}
