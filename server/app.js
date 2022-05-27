import express from "express";
import morgan from "morgan";

import { cors } from "./misc/cors.js";
import { customError, serverError } from "./misc/errors.js";
import propertyTaxRouter from "./dcb/property-tax/routes.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prevent CORS(Cross Origin Resource Sharing) error
app.use(cors);

// handle request related to Property Tax Collections
app.use("/dcb/property-tax", propertyTaxRouter);

//handle errors
app.use(customError);
app.use(serverError);

export default app;
