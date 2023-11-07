import { Router } from "express";
const router = Router()

router.get('/questions', (req, res) => {
  res.json("questions api get request")
})

export default router