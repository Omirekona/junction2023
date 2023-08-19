import db from "./db";

function create(name: string, user_id: string, info: string) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO route (name,user_id,info,progress) VALUES (?, ?, ?, 0)",
      [name, user_id, info],
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

function getById(id: number) {
  return new Promise((resolve, reject) =>
    db.get("SELECT * FROM route WHERE id = ?", [id], (err, row) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(row);
      }
    })
  );
}

function getByUserId(user_id: string) {
  return new Promise((resolve, reject) =>
    db.all("SELECT * FROM route WHERE user_id = ?", [user_id], (err, rows) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    })
  );
}

function incrementProgress(id: number) {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE route SET progress = progress + 1 WHERE id = ?",
      [id],
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

function getMaxID() {
  return new Promise((resolve, reject) => {
    db.get("SELECT MAX(id) FROM route", [], (err, row) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(row);
      }
    });
  });
}

export default {
  create,
  getById,
  getByUserId,
  getMaxID,
  incrementProgress,
} as const;
