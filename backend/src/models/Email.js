import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  address: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Email", emailSchema);