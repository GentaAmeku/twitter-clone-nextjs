export const TAB_POSTS = "posts";
export const TAB_LIKES = "likes";

export type TabsValue = typeof TAB_POSTS | typeof TAB_LIKES;

interface Tabs {
  value: TabsValue;
  label: string;
}

export const TABS: Tabs[] = [
  { value: TAB_POSTS, label: "Posts" },
  { value: TAB_LIKES, label: "Likes" },
];
