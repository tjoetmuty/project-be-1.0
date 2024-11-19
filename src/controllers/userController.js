import userSchema from "../models/userModel.js"

//login
const loginUser = async (req, res) => {
  res.json({message: "login user"})
}

//signup
const signupUser = async (req, res) => {
  res.json({message: "signup user"})
}


export default {loginUser, signupUser}