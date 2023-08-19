import AttractionServiceAPI from "../constants/AttractionService";
import RouteService from "./RouteService";
import { axiosInstance } from "../util/axios";

function getAll() {
  const query = axiosInstance.get(
    AttractionServiceAPI.BUSAN_ATTRACTION_SERVICE_API,
    {
      params: {
        resultType: "json",
        serviceKey: AttractionServiceAPI.BUSAN_ATTRACTION_SERVICE_DECODING_KEY,
        // max data available on the api
        numOfRows: 133,
        pageNo: 1,
      },
    }
  );
  return query.then((response) => {
    return response.data;
  });
}

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
  getAll,
} as const;
