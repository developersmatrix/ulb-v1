import propertyTaxes from "./models.js";
import users from "../../users/model.js";

// get Property Tax details
export const getPropertyTax = (req, res, next) => {
  //   test.find().then((doc) => {
  //     console.log(doc);
  //   });
  users
    .find()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
};

// create or update property Tax details
export const updatePropertyTax = (req, res, next) => {
  const data = {
    _id: Math.random(),
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
        _id: Math.random(),
        year: req.body.year,
        month: req.body.month,
        OBC: req.body.OBC,
        CYD: req.body.CYD,
      },
    ],
  };
  console.log(data);
  res.status(201).json(data);
};
