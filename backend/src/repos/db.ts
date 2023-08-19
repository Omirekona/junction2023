import { Database } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new Database(":memory:");

export const enum UserRole {
  Tourist = "tourist",
}

db.serialize(() => {
  db.run("PRAGMA foreign_keys = ON", (err) => {
    if (err) {
      console.log("failed to enable foreign key constraints", err);
    } else {
      console.log("foreing key support enabled")
    }
  }).run(
    `CREATE TABLE user ( 
      uid TEXT PRIMARY KEY, 
      role TEXT, 
      points INTEGER
    );`, (err) => {
      console.log("error: ", err);
    }
  ).run(
    `CREATE TABLE route (
        rid TEXT PRIMARY KEY,
        route JSON
    );`, (err) => {
      console.log("the error: ", err);
    }
  ).run(
    `CREATE TABLE routeanduser (
      uid TEXT,
      rid INTEGER,
      PRIMARY KEY (uid, rid)
    );`, (err) => {
      console.log("the error: ", err);
    }
  )
  console.log("the third statement is over")
});

export default db;
