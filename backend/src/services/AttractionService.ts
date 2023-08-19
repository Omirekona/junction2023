import AttractionServiceAPI from "../constants/AttractionService";
import RouteService from "./RouteService";
import { axiosInstance } from "../util/axios";

async function get(uc_seq: string, preference: string) {
  const allAttractions = (await RouteService.getLocationsFromPreference(
    preference
  )) as any[];
  return allAttractions.find(
    (attraction) => attraction.UC_SEQ === Number.parseInt(uc_seq)
  );
}

export default {
  get,
} as const;
