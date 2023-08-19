import ImageServiceConstants from "../constants/ImageService";

const deepai = require("deepai");
deepai.setApiKey(ImageServiceConstants.IMAGE_SIMILARITY_KEY);

async function compare(uri: string, baselineURI: string) {
  var resp = await deepai.callStandardApi("image-similarity", {
    image1: baselineURI, // the baseline image we have on the server for each attraction
    image2: uri,
  });
  console.log(resp);
  return resp;
}

export default {
  compare,
} as const;
