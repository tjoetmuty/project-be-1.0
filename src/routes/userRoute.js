import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router()
const { loginUser, signupUser } = userController;

//login route
router.post('/login', loginUser)

//sign up route
router.post('/signup', signupUser)

export default router