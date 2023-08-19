import HttpStatusCodes from "../constants/HttpStatusCodes";
import AttractionService from "../services/AttractionService";
import { Request, Response } from "express";

// deprecated
async function getAll(_: Request, res: Response) {
  const attractions = await AttractionService.getAll();
  return res.status(HttpStatusCodes.OK).json(attractions.getAttractionKr);
}

async function get(req: Request, res: Response) {
  const { uc_seq, preference } = req.query;
  const attraction = await AttractionService.get(
    uc_seq as string,
    preference as string
  );
  return res.status(HttpStatusCodes.OK).json(attraction);
}

export default {
  get,
  getAll,
} as const;
