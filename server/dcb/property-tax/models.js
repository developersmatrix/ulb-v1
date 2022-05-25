import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
});

export default mongoose.model("Testers", testSchema);
