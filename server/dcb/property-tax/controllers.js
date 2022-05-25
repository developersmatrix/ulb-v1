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
  const data = req.body.name;
  console.log(data);
  res.status(201).json(data);
};
