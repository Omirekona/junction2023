import HttpStatusCodes from "../constants/HttpStatusCodes";
import RouteService from "../services/RouteService";
import { Request, Response } from "express";

async function get(req: Request, res: Response) {
  const { preference } = req.query;
  console.log(preference);
  const route = await RouteService.get(preference as string);
  return res.status(HttpStatusCodes.OK).json(route);
}

export default {
  get,
} as const;