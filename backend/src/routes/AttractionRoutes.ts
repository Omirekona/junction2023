import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import AttractionService from "@src/services/AttractionService";
import { IReq, IRes } from "./types/express/misc";

async function getAll(_: IReq, res: IRes) {
  const attractions = await AttractionService.getAll();
  return res.status(HttpStatusCodes.OK).json(attractions.getAttractionKr);
}

export default {
  getAll,
} as const;
