import HttpStatusCodes from "../constants/HttpStatusCodes";
import AttractionService from "../services/AttractionService";
import { Request, Response } from "express";

async function getAll(_: Request, res: Response) {
  const attractions = await AttractionService.getAll();
  return res.status(HttpStatusCodes.OK).json(attractions.getAttractionKr);
}

export default {
  getAll,
} as const;
