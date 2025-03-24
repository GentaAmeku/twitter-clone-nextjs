import TabPanel from "@/app/(3col)/_components/Tabs/Panel";
import { TAB_PEOPLE } from "../../_data";

import type { UsersResponse } from "@/types";
import { useSearchParams } from "next/navigation";
import { fetchPostUsers } from "./actions";
import UserList from "./components/UserList";

const getPostKey =
  (search: string) => (pageIndex: number, previousPageData: UsersResponse) => {
    if (previousPageData && !previousPageData.has_next) return null;
    if (pageIndex === 0) return `/api/posts/users?limit=10&q=${search}`;
    return `/api/posts/users?cursor=${previousPageData.next_cursor}&limit=${10}&q=${search}`;
  };

export default function PeopleTab() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
  return (
    <TabPanel value={TAB_PEOPLE}>
      <UserList getKey={getPostKey(searchQuery)} action={fetchPostUsers} />
    </TabPanel>
  );
}
