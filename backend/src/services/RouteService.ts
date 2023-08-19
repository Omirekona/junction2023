import { AxiosResponse } from "axios";
import AttractionServiceAPI from "../constants/AttractionService";
import ShoppingServiceAPI from "../constants/ShoppingService";
import FoodServiceAPI from "../constants/FoodService";
import FestivalServiceAPI from "../constants/FestivalService";
import { axiosInstance } from "../util/axios";

function get(preference: string) {
  let query: Promise<AxiosResponse<any>>;
  switch (preference) {
    case "shopping":
      query = axiosInstance.get(ShoppingServiceAPI.BUSAN_SHOPPING_SERVICE_API, {
        params: {
          resultType: "json",
          serviceKey: ShoppingServiceAPI.BUSAN_SHOPPING_SERVICE_DECODING_KEY,
          numOfRows: 38,
        },
      });
      break;
    case "food":
      query = axiosInstance.get(FoodServiceAPI.BUSAN_FOOD_SERVICE_API, {
        params: {
          resultType: "json",
          serviceKey: FoodServiceAPI.BUSAN_FOOD_SERVICE_DECODING_KEY,
          numOfRows: 271,
        },
      });
      break;
    case "festival":
      query = axiosInstance.get(FestivalServiceAPI.BUSAN_FESTIVAL_SERVICE_API, {
        params: {
          resultType: "json",
          serviceKey: FestivalServiceAPI.BUSAN_FESTIVAL_SERVICE_DECODING_KEY,
          numOfRows: 35,
        },
      });
      break;
    case "nature":
    case "culture":
    default:
      query = axiosInstance.get(
        AttractionServiceAPI.BUSAN_ATTRACTION_SERVICE_API,
        {
          params: {
            resultType: "json",
            serviceKey:
              AttractionServiceAPI.BUSAN_ATTRACTION_SERVICE_DECODING_KEY,
            // max data available on the api
            numOfRows: 133,
            pageNo: 1,
          },
        }
      );
  }
  return query.then((res) => res.data);
}

export default {
  get,
} as const;
