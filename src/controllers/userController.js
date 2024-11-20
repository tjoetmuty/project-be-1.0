import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'}) //(objet that represents the payload, secret string only known to the server (random words), options (expire) )
}

//login
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try{
    const user = await userModel.login(email, password)

    //create token
    const token = createToken(user._id)

    res.status(200).json({email, user, token})
  } catch (error){
    res.status(400).json({error: error.message})
  }
  
}

//signup
const signupUser = async (req, res) => {
  const {email, password, username} = req.body

  
  try{
    const user = await userModel.signup(email, password, username)

    //create token
    const token = createToken(user._id)

    res.status(200).json({email, user, token})
  } catch (error){
    res.status(400).json({error: error.message})
  }
}


export default {loginUser, signupUser}