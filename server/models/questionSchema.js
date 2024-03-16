import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema for the question model
const questionSchema = new Schema({
    questions: { type: Array, required: true, default: [] }, // Make questions required
    answers: { type: Array, required: true, default: [] }, // Make answers required
    createdAt: { type: Date, default: Date.now }
});

// Create and export the "Question" model
const Question = mongoose.model('Question', questionSchema);

export default Question;
