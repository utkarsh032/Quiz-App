import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema for the result model
const resultSchema = new Schema({
  username: { type: String, required: true }, // Make the username required
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: '' }, // Correct the field name to "achieved"
  createdAt: { type: Date, default: Date.now }
});

// Create and export the "Result" model
const Result = mongoose.model('Result', resultSchema);

export default Result;
