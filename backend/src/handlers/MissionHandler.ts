import { RequestWithUID } from "src/server";
import MissionService from "../services/MissionService";
import { Request, Response } from "express";

async function get(req: RequestWithUID, res: Response) {
  const { route_id, progress, level } = req.query;
  const user_id = req.uid
  const mission = await MissionService.get(
    Number.parseInt(route_id as string),
    user_id as string,
    Number.parseInt(progress as string),
    level ? Number.parseInt(level as string) : undefined
  );
  return res.status(200).json(mission);
}
export default { get } as const;
