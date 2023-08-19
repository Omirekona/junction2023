import { Database } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new Database(":memory:");

db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON", (err) => {
    if (err) {
      console.log("failed to enable foreign key constraints", err);
    } else {
      console.log("foreing key support enabled");
    }
  })
    .run(
      `CREATE TABLE user ( 
        id TEXT PRIMARY KEY, 
        points INTEGER
    );`,
      (err) => {
        if (err) console.log("error: ", err);
      }
    )
    .run(
      `CREATE TABLE route (
        id TEXT PRIMARY KEY,
        route TEXT
    );`,
      (err) => {
        if (err) console.log("the error: ", err);
      }
    )
    .run(
      `CREATE TABLE routeanduser (
      uid TEXT,
      rid INTEGER,
      progress INTEGER,
      PRIMARY KEY (uid, rid)
    );`,
      (err) => {
        if (err) console.log("the error: ", err);
      }
    );
  // `route_id` and `progress` are used as foreign keys to indicate in which part of a route the mission belongs to
  db.run(
    "CREATE TABLE mission (id INTEGER PRIMARY KEY, name TEXT, route_id NUMBER, info TEXT, progress INTEGER level INTEGER is_complete INTEGER)"
  );
  console.log("the third statement is over");
});

export default db;
