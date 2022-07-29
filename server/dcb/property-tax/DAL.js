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

export const addGeneralDataDAL = async (generalData) => {
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

export const updateGeneralDataDAL = async (id, newData) => {
  try {
    const update = await propertyTaxes.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return update;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const addMonthlyCollectionDAL = async (ptaxId, collectionData) => {
  try {
    const Ptax = await propertyTaxes.findById(ptaxId);
    Ptax.monthlyCollection.push({
      _id: mongoose.Types.ObjectId(),
      year: collectionData.year,
      month: collectionData.month,
      OBC: collectionData.OBC,
      CYD: collectionData.CYD,
    });
    const ans = await Ptax.save();
    console.log(collectionData);
    return ans;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const updateMonthlyCollectionDAL = async (
  ptaxId,
  collectionID,
  updatedCollectionData
) => {
  try {
    const update = await propertyTaxes.findById(ptaxId);
    const monthlyCollection = update.monthlyCollection.id(collectionID);
    monthlyCollection.OBC = updatedCollectionData.OBC;
    monthlyCollection.CYD = updatedCollectionData.CYD;
    const ans = await update.save();
    console.log(ans);
    return update;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
