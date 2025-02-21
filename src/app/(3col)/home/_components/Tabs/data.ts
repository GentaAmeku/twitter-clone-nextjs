export const TAB_A = "for-you";
export const TAB_B = "following";

export type TabsValue = typeof TAB_A | typeof TAB_B;

interface Tabs {
  value: TabsValue;
  label: string;
}

export const TABS: Tabs[] = [
  { value: TAB_A, label: "For you" },
  { value: TAB_B, label: "Following" },
];
