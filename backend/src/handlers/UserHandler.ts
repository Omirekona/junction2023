import { Request, Response } from "express";
import UserService from "../services/UserService";
import HttpStatusCodes from "../constants/HttpStatusCodes";

async function get(req: Request, res: Response) {
  const { name } = req.query;
  const user = await UserService.get(name as string);
  if (!user) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({
      error: "User not found",
    });
  }
  return res.status(HttpStatusCodes.OK).json(user);
}

async function create(req: Request, res: Response) {
  const { name } = req.body;
  await UserService.create(name);
  return res.status(HttpStatusCodes.OK);
}

async function addPoints(req: Request, res: Response) {
  const { points } = req.body;
  await UserService.addPoints(points);
  return res.status(HttpStatusCodes.OK);
}

export default {
  get,
  create,
  addPoints,
} as const;
