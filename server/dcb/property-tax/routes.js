import express from "express";

import {
  getPropertyTax,
  updateGeneralData,
  addGeneralData,
  addMonthlyCollection,
  updateMonthlyCollection,
} from "./controllers.js";

const router = express.Router();

//handle /dc/property-tax
router.get("/", getPropertyTax);
router.post("/general-data", addGeneralData);
router.patch("/general-data/:id", updateGeneralData);
router.post("/monthly-collection/:id", addMonthlyCollection);
router.patch("/monthly-collection/:id", updateMonthlyCollection);

export default router;
