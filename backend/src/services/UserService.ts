import userDB from "../repos/user";

function create(id: string) {
  return userDB.create(id);
}

function get(id: string) {
  return userDB.get(id);
}

function addPoints(id: string, points: number) {
  return userDB.addPoints(id, points);
}

export default {
  create,
  get,
  addPoints,
} as const;
