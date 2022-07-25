import mongoose from "mongoose";

import propertyTaxes from "./models.js";

export const getPtaxData = async (collectionType, startYear) => {
  let ptax = null;
  console.log(startYear);
  try {
    ptax = await propertyTaxes.find({ startYear });
    console.log(ptax);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  return ptax;
};

export const createGeneralData = async (generalData) => {
  const newData = new propertyTaxes({
    _id: mongoose.Types.ObjectId(),
    userId: generalData.userId,
    startYear: generalData.startYear,
    endYear: generalData.endYear,
    commercial: generalData.commercial,
    residential: generalData.residential,
    vacant: generalData.vacant,
    others: generalData.others,
    openingBalance: generalData.openingBalance,
    currentYearDemand: generalData.currentYearDemand,
  });
  try {
    const create = await newData.save();
    return create;
  } catch (error) {
    throw new Error(error);
  }
};

export const patchPtaxData = async (id, newData) => {
  try {
    update = await propertyTaxes.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return update;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
