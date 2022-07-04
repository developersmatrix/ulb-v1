import { getPtaxData } from "./DAL.js";

export const serviceGetPtax = async (collectionType, startYear) => {
  let data = [];
  try {
    data = await getPtaxData(collectionType, startYear);
    console.log(data);
  } catch (error) {
    console.log(error.message);
    throw error;
  }

  return data;
};
