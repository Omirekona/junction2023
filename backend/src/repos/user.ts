import db from "./db";

function create(uid: string, points: number = 0) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO user (id, points) VALUES (?, ?)",
      [uid, points],
      (err) => {
        if (err) {
          reject(err);
        }
        resolve(null);
      }
    );
  });
}

function get(id: string) {
  return new Promise((resolve, reject) =>
    db.get("SELECT * FROM user WHERE id = ?", [id], (err, row) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(row);
      }
    })
  );
}

function addPoints(id: string, points: number) {
  return new Promise((resolve, reject) => {
    db.run("UPDATE user SET points = points + ? WHERE id = ?", [points, id], (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(null);
      }
    });
  });
}


function checkIfUserExists(uid: string) {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM user WHERE id = ?", 
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
  points: number = 0
) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO user (id, points) VALUES (?, ?);",
      [uid, points],
      (err) => {
        if (err) {
          reject(err);
        }
        resolve(null);
      }
    )
  })
}

export default {
  create,
  get,
  addPoints,
  checkIfUserExists,
  insertUser
} as const;