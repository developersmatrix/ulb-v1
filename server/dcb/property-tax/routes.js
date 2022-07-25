import express from "express";

import {
  getPropertyTax,
  // patchPropertyTax,
  // updatePropertyTax,
  addGeneralData,
} from "./controllers.js";

const router = express.Router();

//handle /dc/property-tax
router.get("/", getPropertyTax);
router.post("/general-data", addGeneralData);
// router.patch("/general-data/:id", updateGeneralData);
// router.post("/monthly-collection", addMonthlyCollection);
// router.patch("/monthly-collection/:id", updateMonthlyCollection);

export default router;
