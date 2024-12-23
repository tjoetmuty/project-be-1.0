import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userVerification = new Schema ({
  verified: Boolean,
  userId: String,
  uniqueString: String,
  createdAt: Date,
  expiresAt: Date,
})

export default mongoose.model('userVerification', userVerification)