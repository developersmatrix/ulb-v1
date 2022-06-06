import mongoose from "mongoose";

import Users from "../../users/model.js";

const propertyTaxSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  startYear: Number,
  endYear: Number,
  commercial: Number,
  residential: Number,
  vacant: Number,
  others: Number,
  openingBalance: Number,
  currentYearDemand: Number,
  monthlyCollection: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      year: Number,
      month: Number,
      OBC: Number,
      CYD: Number,
    },
  ],
});

export default mongoose.model("PropertyTaxes", propertyTaxSchema);
