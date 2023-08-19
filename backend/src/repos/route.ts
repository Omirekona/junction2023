import db from "./db";

function create(uid: string, info: string) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run("INSERT INTO route (info) VALUES (?)", [info], (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(null);
        }
      });
    });
    const recentID = getMaxID();
    db.run(
      "INSERT INTO routeanduser (uid, rid, progress) VALUES (?, ?, 0)",
      [uid, recentID],
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

function getByUserId(id: string) {
  return new Promise((resolve, reject) =>
    db.get(
      "SELECT id, info FROM route INNER JOIN routeanduser ru ON route.id = ru.rid WHERE id = ?",
      [id],
      (err, row) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(row);
        }
      }
    )
  );
}

function incrementProgress(uid: string, rid: number) {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE routeanduser SET progress = progress + 1 WHERE uid = ? AND rid = ?",
      [uid, rid],
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
        return resolve((row as any)["MAX(id)"]);
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
