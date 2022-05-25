import test from "./models.js";
import users from "../../users/model.js";

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
