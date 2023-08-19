import missionDB from "../repos/mission";

async function get(route_id: number, progress: number, level?: number) {
  return missionDB.get(route_id, progress, level);
}

export default {
  get,
} as const;
