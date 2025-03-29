import createPostsDatabase from "./posts";
import createTrendsDatabase from "./trends";
import createUsersDatabase from "./users";

const globalDb = global as unknown as {
  usersDb: ReturnType<typeof createUsersDatabase>;
  trendsDb: ReturnType<typeof createTrendsDatabase>;
  postsDb: ReturnType<typeof createPostsDatabase>;
};

if (!globalDb.usersDb) {
  globalDb.usersDb = createUsersDatabase();
}
if (!globalDb.trendsDb) {
  globalDb.trendsDb = createTrendsDatabase();
}
if (!globalDb.postsDb) {
  globalDb.postsDb = createPostsDatabase(globalDb.usersDb, globalDb.trendsDb);
}

export const usersDb = globalDb.usersDb;
export const trendsDb = globalDb.trendsDb;
export const postsDb = globalDb.postsDb;
