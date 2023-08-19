import { Database } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE user (id INTEGER PRIMARY KEY, name TEXT, points INTEGER)"
  );
  db.run(
    "CREATE TABLE route (id INTEGER PRIMARY KEY, name TEXT, user_id NUMBER, info TEXT, progress INTEGER)"
  );
});

export default db;
