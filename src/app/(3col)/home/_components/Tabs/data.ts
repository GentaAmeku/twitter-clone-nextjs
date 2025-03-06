export const TAB_FOR_YOU = "for-you";
export const TAB_FOLLOWING = "following";

export type TabsValue = typeof TAB_FOR_YOU | typeof TAB_FOLLOWING;

interface Tabs {
  value: TabsValue;
  label: string;
}

export const TABS: Tabs[] = [
  { value: TAB_FOR_YOU, label: "For you" },
  { value: TAB_FOLLOWING, label: "Following" },
];
