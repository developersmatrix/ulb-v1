import express from "express";

import {
  getPropertyTax,
  patchPropertyTax,
  updatePropertyTax,
} from "./controllers.js";

const router = express.Router();

//handle /dc/property-tax
router.get("/", getPropertyTax);
router.post("/", updatePropertyTax);
router.patch("/:id", patchPropertyTax);

export default router;
