import userModel from "../src/models/userModel.js"
import jwt from "jsonwebtoken"

const requireAuth = async (req, res, next) => {
  //verify auth
  const {authorization } = req.headers
  if(!authorization){
    return res.status(401).json({error: 'auth token required'})
  }

  const token = authorization.split(' ')[1]
  console.log("auth token nih: ", token)

  try{
    const {_id} = jwt.verify(token, process.env.SECRET)
    req.user = await userModel.findOne({_id}).select('_id')
    next()
  } catch(err) {
    res.status(401).json({error: 'req is not authorized'})
  }
}

export default requireAuth