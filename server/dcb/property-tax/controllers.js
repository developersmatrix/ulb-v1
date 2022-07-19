import mongoose from "mongoose";

import { serviceGetPtax, servicePatchPtax } from "./service.js";

import propertyTaxes from "./models.js";
import users from "../../users/model.js";

// get Property Tax details
export const getPropertyTax = async (req, res, next) => {
  const collectionType = req.query.collectionType;
  const startYear = req.query.startYear;

  try {
    const response = await serviceGetPtax(collectionType, startYear);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }

  // propertyTaxes
  //   .find()
  //   .then((doc) => res.status(200).json(doc))
  //   .catch((err) => next(err));
};

// create or update property Tax details
export const updatePropertyTax = (req, res, next) => {
  const data = {
    _id: mongoose.Types.ObjectId(),
    userId: req.body.userId,
    startYear: req.body.startYear,
    endYear: req.body.endYear,
    commercial: req.body.commercial,
    residential: req.body.residential,
    vacant: req.body.vacant,
    others: req.body.others,
    openingBalance: req.body.openingBalance,
    currentYearDemand: req.body.currentYearDemand,
    monthlyCollection: [
      {
        _id: mongoose.Types.ObjectId(),
        year: req.body.year,
        month: req.body.month,
        OBC: req.body.OBC,
        CYD: req.body.CYD,
      },
    ],
  };
  // const ptax = new propertyTaxes(data);
  // ptax
  //   .save()
  //   .then((doc) => res.status(201).json(data))
  //   .catch((err) => next(err));
  const ulbName = req.headers.ulbname;
  console.log(ulbName);
  console.log(req.body);
  res.status(201).json(req.body);
};

export const patchPropertyTax = async (req, res, next) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const response = await servicePatchPtax(id, newData);
    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
};
