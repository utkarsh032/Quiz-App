
// question
export async function getQuestions(req, res) {
  res.json("question api get request")
}

export async function insertQuestions(req, res) {
  res.json("question api insert request")
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