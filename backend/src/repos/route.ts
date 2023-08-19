import db from "./db";

function create(name: string, user_id: string, info: any) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO route (name,user_id,info,progress) VALUES (?, ?, ?, 0)",
      [name, user_id, JSON.stringify(info)],
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

export default {
  create,
  getById,
  incrementProgress,
} as const;
