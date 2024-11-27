import express from "express"
import libraryData from "../controllers/libraryController.js"
import requireAuth from "../../middleware/requireAuth.js"

const router = express.Router()

router.use(requireAuth)
router.get('/get', libraryData)
export default router