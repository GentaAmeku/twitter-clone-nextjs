import Tabs from "@/app/(3col)/_components/Tabs";
import LikesTab from "./components/LikesTab";
import PostsTab from "./components/PostsTab";
import { TAB_POSTS, tabs } from "./data";

type ProfileTabsProps = {
  userId: string;
};

export default function ProfileTabs({ userId }: ProfileTabsProps) {
  return (
    <Tabs tabs={tabs} defaultValue={TAB_POSTS}>
      <PostsTab userId={userId} />
      <LikesTab userId={userId} />
    </Tabs>
  );
}
