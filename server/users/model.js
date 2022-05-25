import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
  },
  ulbname: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("Users", userSchema);
