import { Request, Response } from "express";
import ImageService from "../services/ImageService";
import HttpStatusCodes from "../constants/HttpStatusCodes";
import AttractionService from "../services/AttractionService";

async function compare(req: Request, res: Response) {
  const { image, uc_seq, preference } = req.query;
  const attraction = await AttractionService.get(
    uc_seq as string,
    preference as string
  );
  const result = await ImageService.compare(
    image as string,
    attraction.MAIN_IMG_NORMAL
  );
  if (result === undefined) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
  }
  return res.status(HttpStatusCodes.OK).json({
    ...result,
    original_image: attraction.MAIN_IMG_NORMAL,
  });
}

export default {
  compare,
} as const;
