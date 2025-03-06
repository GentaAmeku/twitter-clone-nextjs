import LikesTab from "./components/LikesTab";
import PostsTab from "./components/PostsTab";
import Tabs from "./components/Tabs";

type ProfileTabsProps = {
  userId: string;
};

export default function ProfileTabs({ userId }: ProfileTabsProps) {
  return (
    <Tabs>
      <PostsTab userId={userId} />
      <LikesTab userId={userId} />
    </Tabs>
  );
}
