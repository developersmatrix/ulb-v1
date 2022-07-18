// import mongoose from "mongoose";

import propertyTaxes from "./models.js";

export const getPtaxData = async (collectionType, startYear) => {
  let ptax = null;
  try {
    ptax = await propertyTaxes.find({ startYear });
    // console.log(ptax);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  return ptax;
};

export const patchPtaxData = async (data) => {
  let update = null;
  try {
    update = await propertyTaxes.findByIdAndUpdate(data.id, data, {
      new: true,
    });
    console.log(update);
  } catch (err) {
    console.log(err);
    throw Error();
  }
  return update;
};
