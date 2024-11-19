import userModel from "../models/userModel.js"


//login
const loginUser = async (req, res) => {
  res.json({message: "login user"})
}

//signup
const signupUser = async (req, res) => {
  const {email, password, username} = req.body

  try{
    const user = await userModel.signup(email, password, username)
    res.status(200).json({email, user})
  } catch (error){
    res.status(400).json({error: error.message})
  }
}


export default {loginUser, signupUser}