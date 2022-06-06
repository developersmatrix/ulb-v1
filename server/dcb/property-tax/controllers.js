import mongoose from "mongoose";

import propertyTaxes from "./models.js";
import users from "../../users/model.js";

// get Property Tax details
export const getPropertyTax = (req, res, next) => {
  propertyTaxes
    .find()
    .populate("userId")
    .then((doc) => res.status(200).json(doc))
    .catch((err) => next(err));
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
  res.status(201).json(req.body);
};
