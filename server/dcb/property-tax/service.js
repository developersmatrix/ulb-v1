import { patchPropertyTax } from "./controllers.js";
import { getPtaxData } from "./DAL.js";

export const serviceGetPtax = async (collectionType, startYear) => {
  let data = [];
  try {
    data = await getPtaxData(collectionType, startYear);
  } catch (error) {
    console.log(error.message);
    throw error;
  }

  return data;
};

export const servicePatchPtax = async (data) => {
  console.log(data);
  let res = null;
  try {
    res = await patchPropertyTax(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
  return res;
};
