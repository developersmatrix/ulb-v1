import {
  getPtaxData,
  addGeneralDataDAL,
  updateGeneralDataDAL,
  addMonthlyCollectionDAL,
  updateMonthlyCollectionDAL,
} from "./DAL.js";

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
    const response = await addGeneralDataDAL(generalData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateGeneralDataService = async (id, newData) => {
  try {
    const res = await updateGeneralDataDAL(id, newData);
    return res;
  } catch (error) {
    console.log(error);
    throw Error();
  }
};

export const addMonthlyCollectionService = async (ptaxId, collectionData) => {
  try {
    const res = await addMonthlyCollectionDAL(ptaxId, collectionData);
    return res;
  } catch (error) {
    console.log(error);
    throw Error();
  }
};

export const updateMonthlyCollectionService = async (
  id,
  updatedCollectionData
) => {
  const ptaxId = id;
  const collectionID = updatedCollectionData.id;
  // const updatedCollectionData = { ...collectionData.monthlyCollection };

  try {
    const res = await updateMonthlyCollectionDAL(
      ptaxId,
      collectionID,
      updatedCollectionData
    );
    return res;
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
