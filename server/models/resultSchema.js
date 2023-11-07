import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose

const resultModel = new Schema({
  userName: { type: String },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achived: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('result', resultModel);
