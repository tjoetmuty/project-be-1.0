import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router()
const { loginUser, signupUser, usersAccount } = userController;

//login route
router.post('/login', loginUser)

//sign up route
router.post('/signup', signupUser)

//users
router.get('/users', usersAccount)

export default router