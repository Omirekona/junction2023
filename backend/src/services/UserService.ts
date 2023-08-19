import userDB from "../repos/user";

function create(name: string) {
  return userDB.create(name);
}

function get(name: string) {
  return userDB.get(name);
}

function addPoints(points: number) {
  return userDB.addPoints(points);
}

export default {
  create,
  get,
  addPoints,
} as const;
