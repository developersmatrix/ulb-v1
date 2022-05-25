import express from "express";

import { getPropertyTax } from "./controllers.js";

const router = express.Router();

//handle /dc/property-tax
router.get("/", getPropertyTax);

export default router;
