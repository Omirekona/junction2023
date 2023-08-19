import { Database } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE user (id INTEGER, name TEXT, points INTEGER)");
  db.run("CREATE TABLE route (id NUMBER, name TEXT, user_id NUMBER, info TEXT)");
});

export default db;