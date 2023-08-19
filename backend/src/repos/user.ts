import db from "./db";

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
} as const;
