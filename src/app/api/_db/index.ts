import createPostsDatabase from "./posts";
import createTrendsDatabase from "./trends";
import createUsersDatabase from "./users";

const usersDb = createUsersDatabase();
const trendsDb = createTrendsDatabase();
const postsDb = createPostsDatabase(usersDb, trendsDb);

const init = () => null;

console.info("DB Mocking enabled.");

export { init, usersDb, trendsDb, postsDb };
