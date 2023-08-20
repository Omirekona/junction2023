import missionDB from "../repos/mission";
import {
  bexcoMissions,
  artGalleryMissions,
  hallOfMovieMissions,
} from "src/constants";

async function get(
  route_id: number,
  user_id: string,
  progress: number,
  level?: number
) {
  const missions = await missionDB.get(route_id, user_id, progress, level);
  if (missions) return missions;
  else {
    bexcoMissions.forEach((mission) => {
      missionDB.create(
        mission.name,
        route_id,
        user_id,
        mission.info,
        mission.progress,
        mission.level
      );
    });
    artGalleryMissions.forEach((mission) => {
      missionDB.create(
        mission.name,
        route_id,
        user_id,
        mission.info,
        mission.progress,
        mission.level
      );
    });
    hallOfMovieMissions.forEach((mission) => {
      missionDB.create(
        mission.name,
        route_id,
        user_id,
        mission.info,
        mission.progress,
        mission.level
      );
    });
  }
}

export default {
  get,
} as const;
