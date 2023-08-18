import AttractionServiceAPI from "../constants/AttractionService";
import { axiosInstance } from "../util/axios";

function getAll() {
  const query = axiosInstance.get(
    AttractionServiceAPI.BUSAN_ATTRACTION_SERVICE_API,
    {
      params: {
        resultType: "json",
        serviceKey: AttractionServiceAPI.BUSAN_ATTRACTION_SERVICE_ENCODING_KEY,
        numOfRows: 1,
        pageNo: 1,
      },
    }
  );
  return query.then((response) => response.data);
}

export default {
  getAll,
} as const;
