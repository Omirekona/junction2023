import HttpStatusCodes from "../constants/HttpStatusCodes";
import AttractionService from "../services/AttractionService";
import { Request, Response } from "express";

async function get(req: Request, res: Response) {
  const { uc_seq, preference } = req.query;
  const attraction = await AttractionService.get(
    uc_seq as string,
    preference as string
  );
  return res.status(HttpStatusCodes.OK).json(attraction);
}

async function getAll(req: Request, res: Response) {
  const { preference } = req.query;
  const attractions = await AttractionService.getAll(preference as string);
  return res.status(HttpStatusCodes.OK).json(attractions);
}

export default {
  get,
  getAll,
} as const;
