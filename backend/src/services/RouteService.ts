import { AxiosResponse } from "axios";
import AttractionServiceAPI from "../constants/AttractionService";
import ShoppingServiceAPI from "../constants/ShoppingService";
import FoodServiceAPI from "../constants/FoodService";
import FestivalServiceAPI from "../constants/FestivalService";
import { axiosInstance } from "../util/axios";
import { getRandomElement, getRandomInt } from "@src/util";

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function getLocationsFromPreference(preference: string) {
  let query: Promise<AxiosResponse<any>>;
  let innerDataFieldName: string;
  switch (preference) {
    case "shopping":
      query = axiosInstance.get(ShoppingServiceAPI.BUSAN_SHOPPING_SERVICE_API, {
        params: {
          resultType: "json",
          serviceKey: ShoppingServiceAPI.BUSAN_SHOPPING_SERVICE_DECODING_KEY,
          numOfRows: 38,
        },
      });
      innerDataFieldName = "getShoppingKr";
      break;
    case "food":
      query = axiosInstance.get(FoodServiceAPI.BUSAN_FOOD_SERVICE_API, {
        params: {
          resultType: "json",
          serviceKey: FoodServiceAPI.BUSAN_FOOD_SERVICE_DECODING_KEY,
          numOfRows: 271,
        },
      });
      innerDataFieldName = "getFoodKr";
      break;
    case "festival":
      query = axiosInstance.get(FestivalServiceAPI.BUSAN_FESTIVAL_SERVICE_API, {
        params: {
          resultType: "json",
          serviceKey: FestivalServiceAPI.BUSAN_FESTIVAL_SERVICE_DECODING_KEY,
          numOfRows: 35,
        },
      });
      innerDataFieldName = "getFestivalKr";
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
      innerDataFieldName = "getAttractionKr";
  }
  return query.then((res) => res.data[innerDataFieldName].item);
}
async function get(preference: string) {
  const locations = (await getLocationsFromPreference(preference)) as any[];
  const pickNum = getRandomInt(3, 7);
  let pickedLocations = new Set();
  for (let i = 0; pickedLocations.size < pickNum; i++) {
    pickedLocations.add(getRandomElement(locations));
  }

  return [...pickedLocations].sort((a:any,b:any)=>{return a.UC_SEQ - b.UC_SEQ});
}

export default {
  get,
} as const;
