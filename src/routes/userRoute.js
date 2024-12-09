import express from "express"
import userController from "../controllers/userController.js"
import requireAuth from "../../middleware/requireAuth.js";

const router = express.Router()
const { loginUser, signupUser, usersAccount, userProfile } = userController;

//login route
router.post('/login', loginUser)

//sign up route
router.post('/signup', signupUser)

//users
router.get('/users', usersAccount)

//profile
router.get('/profile', requireAuth, userProfile)

export default router