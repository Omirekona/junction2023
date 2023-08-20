import { Request, Response } from "express";
import UserService from "../services/UserService";
import HttpStatusCodes from "../constants/HttpStatusCodes";
import { RequestWithUID } from "src/server";

async function get(req: RequestWithUID, res: Response) {
  const id = req.uid;
  const user = await UserService.get(id as string);
  if (!user) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({
      error: "User not found",
    });
  }
  return res.status(HttpStatusCodes.OK).json(user);
}

async function create(req: RequestWithUID, res: Response) {
  const id = req.uid;
  if (!id) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      error: "Bad request",
    });
  }
  await UserService.create(id);
  return res.status(HttpStatusCodes.OK);
}

async function addPoints(req: RequestWithUID, res: Response) {
  const { points } = req.body;
  const uid = req.uid;
  if (!uid) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      error: "Bad request",
    });
  }
  await UserService.addPoints(uid, points);
  return res.status(HttpStatusCodes.OK);
}

export default {
  get,
  create,
  addPoints,
} as const;
