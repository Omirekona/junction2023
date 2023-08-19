import HttpStatusCodes from "../constants/HttpStatusCodes";
import RouteService from "../services/RouteService";
import { Request, Response } from "express";

async function getNew(req: Request, res: Response) {
  const { preference, userId } = req.query;
  console.log(preference);
  const route = await RouteService.get(preference as string);
  if (route !== undefined) {
    const dbRoute = await RouteService.create(
      route[0].TITLE as string,
      route,
      userId as string
    );
    return res.status(HttpStatusCodes.OK).json(dbRoute);
  } else {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getById(req: Request, res: Response) {
  const { routeId } = req.query;
  const route = await RouteService.getById(routeId as string);
  return res.status(HttpStatusCodes.OK).json(route);
}

async function getByUserId(req: Request, res: Response) {
  const { userId } = req.query;
  const route = await RouteService.getAllByUserId(userId as string);
  return res.status(HttpStatusCodes.OK).json(route);
}

async function get(req: Request, res: Response) {
  const { routeId, userId } = req.query;
  if (routeId !== undefined) {
    return getById(req, res);
  } else if (userId !== undefined) {
    return getByUserId(req, res);
  } else {
    return res.status(HttpStatusCodes.BAD_REQUEST);
  }
}

export default {
  get,
  getByUserId,
  getById,
  getNew,
} as const;
