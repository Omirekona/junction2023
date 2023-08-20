import db from "./db";

async function create(
  name: string,
  route_id: number,
  user_id: string,
  info: string,
  progress: number,
  level: number
) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO mission (name, route_id,user_id, info, progress, level, is_complete) VALUES (?, ?, ?, ?, ?, ?, 0)",
      [name, route_id, user_id, info, progress, level],
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

async function get(
  route_id: number,
  user_id: string,
  progress: number,
  level?: number
) {
  if (level === undefined) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM mission WHERE route_id = ? AND user_id = ? AND progress = ?",
        [route_id, user_id, progress],
        (err, rows) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(rows);
          }
        }
      );
    });
  }
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM mission WHERE route_id = ? AND user_id = ? AND progress = ? AND level = ?",
      [route_id, user_id, progress, level],
      (err, rows) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(rows);
        }
      }
    );
  });
}

async function complete(
  route_id: number,
  user_id: string,
  progress: number,
  level: number
) {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE mission SET is_complete = 1 WHERE route_id = ? AND user_id = ? AND progress = ? AND level = ?",
      [route_id, user_id, progress, level],
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

export default {
  create,
  get,
  complete,
};
