import { Database } from "sqlite3";

const db = new Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE user (id NUMBER, name TEXT)");
  // db.run("CREATE TABLE route (id NUMBER, name TEXT, user_id NUMBER)");
});

export default db;
