import { Database } from "sqlite3";

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new Database(":memory:");

export interface User {
  id: string;
  points: number;
}

export interface Route {
  id: number;
  info: string; // serialized Attraction[]
}

export interface RouteAndUser {
  uid: string;
  rid: number;
  progress: number;
}

export interface Mission {
  id: number;
  name: string;
  route_id: number;
  user_id: number;
  info: string;
  progress: number;
  level: number;
  is_complete: number;
}

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
        id INTEGER PRIMARY KEY,
        info TEXT
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
    "CREATE TABLE mission (id INTEGER PRIMARY KEY, name TEXT, route_id NUMBER, user_id TEXT, info TEXT, progress INTEGER level INTEGER is_complete INTEGER)"
  );
  console.log("the third statement is over");
});

export default db;
