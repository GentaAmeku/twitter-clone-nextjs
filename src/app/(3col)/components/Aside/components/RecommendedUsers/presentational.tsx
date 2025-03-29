import ShowMore from "@/app/(3col)/components/Aside/components/ShowMore";
import Section from "@/app/(3col)/components/Section";
import { Stack } from "@/lib/mantine/core";
import type { User } from "@/types";
import FollowAnchor from "./components/FollowAnchor";

type RecommendedUsersProps = {
  users: User[];
};

export default function RecommendedUsers({ users }: RecommendedUsersProps) {
  return (
    <Section title="Who to follow">
      <Stack align="flex-start" justify="center" gap={0} px={0}>
        {users.map((user) => (
          <FollowAnchor key={user.name} {...user} />
        ))}
      </Stack>
      <ShowMore />
    </Section>
  );
}
