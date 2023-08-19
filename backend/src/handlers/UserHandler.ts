import { Request, Response } from "express";
import UserService from "../services/UserService";
import HttpStatusCodes from "../constants/HttpStatusCodes";

async function get(req: Request, res: Response) {
  const { id } = req.query;
  const user = await UserService.get(id as string);
  if (!user) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({
      error: "User not found",
    });
  }
  return res.status(HttpStatusCodes.OK).json(user);
}

async function create(req: Request, res: Response) {
  const { id } = req.body;
  await UserService.create(id);
  return res.status(HttpStatusCodes.OK);
}

async function addPoints(req: Request, res: Response) {
  const { points } = req.body;
  const { uid } = req.params;
  await UserService.addPoints(uid, points);
  return res.status(HttpStatusCodes.OK);
}

export default {
  get,
  create,
  addPoints,
} as const;
