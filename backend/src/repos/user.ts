import db from "./db";
import {UserRole} from "./db";


function checkIfUserExists(uid: string) {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM user WHERE uid = ?", 
      [uid], 
      (err, row) => {
        if (err || !row) {
          reject(err);
        }
        resolve(null);
      })
  })
}

function insertUser(
  uid: string, 
  role: UserRole = UserRole.Tourist, 
  points: number = 0
) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO user (uid, role, points) VALUES (?, ?, ?, ?)",
      [uid, role, points],
      (err) => {
        if (err) {
          reject(err);
        }
        resolve(null);
      }
    )
  })
}

function insertRoute(uid: string, route: JSON) {
}


function create(name: string) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO user (name, points) VALUES (?, ?)",
      [name, 0],
      (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(null);
        }
      }
    );
  });
}

function get(name: string) {
  return new Promise((resolve, reject) =>
    db.get("SELECT * FROM user WHERE name = ?", [name], (err, row) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(row);
      }
    })
  );
}

function addPoints(points: number) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE user SET points = points + ?", [points], (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(null);
      }
    });
  });
}


export default {
  create,
  get,
  addPoints,
  checkIfUserExists,
  insertUser
} as const;
