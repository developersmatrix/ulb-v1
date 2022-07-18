import { getPtaxData, patchPtaxData } from "./DAL.js";

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
  // console.log("service", data);
  let res = null;
  try {
    res = await patchPtaxData(data);
  } catch (error) {
    console.log(error);
    throw Error();
  }
  return res;
};
