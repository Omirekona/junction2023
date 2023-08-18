import AttractionServiceAPI from "../constants/AttractionService";
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
    console.log(response.data);
    return response.data;
  });
}

export default {
  getAll,
} as const;
