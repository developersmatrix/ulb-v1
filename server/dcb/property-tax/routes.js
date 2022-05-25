import express from "express";

import { getPropertyTax, updatePropertyTax } from "./controllers.js";

const router = express.Router();

//handle /dc/property-tax
router.get("/", getPropertyTax);
router.post("/", updatePropertyTax);

export default router;
