import dayjs from "dayjs";
import en from "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";

import createPostsDatabase from "./posts";
import createTrendsDatabase from "./trends";
import createUsersDatabase from "./users";

dayjs.extend(relativeTime);
dayjs.locale(en);

const usersDb = createUsersDatabase();
const trendsDb = createTrendsDatabase();
const postsDb = createPostsDatabase(usersDb, trendsDb);

const init = () => null;

console.info("DB Mocking enabled.");

export { init, usersDb, trendsDb, postsDb };
