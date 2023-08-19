export interface Attraction {
  UC_SEQ: number; // unique content id
  MAIN_TITLE: string; // title of location
  GUGUN_NM: string;
  LAT: number;
  LNG: number;
  PLACE: string;
  TITLE: string; // descriptive title of location
  SUBTITLE: string;
  MAIN_PLACE: string;
  ADDR1: string;
  ADDR2: string;
  CNTCT_TEL: string;
  HOMEPAGE_URL: string;
  TRFC_INFO: string;
  USAGE_DAY: string;
  HLDY_INFO: string;
  MAIN_IMG_NORMAL: string; // image links
  MAIN_IMG_THUMB: string; // image links
  ITEMCNTNTS: string; // description
  points: number; // points to be awarded to user
}
