"use server";

import ProfileTabs from "./presentational";

export default async function ProfileTabsContainer({
  promise,
}: { promise: Promise<{ id: string }> }) {
  const userId = (await promise).id;
  return <ProfileTabs userId={userId} />;
}
