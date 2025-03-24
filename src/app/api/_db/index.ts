import createPostsDatabase from "./posts";
import createTrendsDatabase from "./trends";
import createUsersDatabase from "./users";

const globalDb = global as unknown as {
  usersDb: ReturnType<typeof createUsersDatabase>;
  trendsDb: ReturnType<typeof createTrendsDatabase>;
  postsDb: ReturnType<typeof createPostsDatabase>;
};

if (!globalDb.usersDb) {
  console.info("Creating users database...");
  globalDb.usersDb = createUsersDatabase();
}
if (!globalDb.trendsDb) {
  console.info("Creating trends database...");
  globalDb.trendsDb = createTrendsDatabase();
}
if (!globalDb.postsDb) {
  console.info("Creating posts database...");
  globalDb.postsDb = createPostsDatabase(globalDb.usersDb, globalDb.trendsDb);
}

export const usersDb = globalDb.usersDb;
export const trendsDb = globalDb.trendsDb;
export const postsDb = globalDb.postsDb;
