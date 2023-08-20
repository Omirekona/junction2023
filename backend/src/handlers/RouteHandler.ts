import { RequestWithUID } from "src/server";
import HttpStatusCodes from "../constants/HttpStatusCodes";
import RouteService from "../services/RouteService";
import { Request, Response } from "express";

async function getNew(req: RequestWithUID, res: Response) {
  try {
    const { preference } = req.query;
    const userId = req.uid;
    if (!userId) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        error: "Bad request",
      });
    }
    console.log(preference);
    const route = await RouteService.get(preference as string);
    if (route !== undefined) {
      const dbRoute = await RouteService.create(route, userId as string);
      return res.status(HttpStatusCodes.OK).json(dbRoute);
    } else {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
  } catch (err: any) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

async function getById(req: Request, res: Response) {
  const { routeId } = req.query;
  const route = await RouteService.getById(routeId as string);
  return res.status(HttpStatusCodes.OK).json(route);
}

async function getByUserId(req: RequestWithUID, res: Response) {
  const userId = req.uid;
  if (!userId) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      error: "Bad request",
    });
  }
  const route = await RouteService.getAllByUserId(userId as string);
  return res.status(HttpStatusCodes.OK).json(route);
}

async function get(req: RequestWithUID, res: Response) {
  const { routeId } = req.query;
  if (routeId !== undefined) {
    return getById(req, res);
  } else if (req.uid !== undefined) {
    return getByUserId(req, res);
  } else {
    return res.status(HttpStatusCodes.BAD_REQUEST);
  }
}

async function incrementProgress(req: RequestWithUID, res: Response) {
  const { routeId } = req.query;
  const userId = req.uid;
  if (!userId) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      error: "Bad request",
    });
  }
  await RouteService.incrementProgress(
    userId as string,
    Number.parseInt(routeId as string)
  );
  return res.status(HttpStatusCodes.OK);
}

export default {
  get,
  getByUserId,
  getById,
  getNew,
  incrementProgress,
} as const;
