// import mongoose from "mongoose";

import propertyTaxes from "./models.js";

export const getPtaxData = async (collectionType, startYear) => {
  let ptax = null;
  try {
    ptax = await propertyTaxes.find({ collectionType, startYear });
    console.log(ptax);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  return ptax;
};

export const patchPtaxData = async (id, newData) => {
  let update = null;
  try {
    update = await propertyTaxes.findByIdAndUpdate(id, newData, {
      new: true,
    });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
  return update;
};
