import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  to: String,
  from: String,
  subject: String,
  body: String,
  externalId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Message", messageSchema);