import { getPtaxData, createGeneralData, patchPtaxData } from "./DAL.js";

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

export const addGeneralDataService = async (generalData) => {
  try {
    const response = await createGeneralData(generalData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const servicePatchPtax = async (id, newData) => {
  let res = null;
  try {
    res = await patchPtaxData(id, newData);
  } catch (error) {
    console.log(error);
    throw Error();
  }
  return res;
};
