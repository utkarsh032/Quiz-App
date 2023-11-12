import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

// question
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q)
  } catch (error) {
    res.json({ error })
  }
}

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers }, function (err, data) {
      res.json({ msg: "Data Saved Successfully...!" })
    })
  } catch (error) {
    res.json({ error })
  }
}

export async function dropQuestions(req, res) {
  res.json("question api drop request")
}

// results

export async function getResult(req, res) {
  res.json("result api get request")
}

export async function storeResult(req, res) {
  res.json("result api post request")
}

export async function dropResult(req, res) {
  res.json("result api drop request")
}