import mongoose from "mongoose";
import bcrypt from "bcrypt"
import validator from "validator"
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  verified: Boolean
})

//static signup method
userSchema.statics.signup = async function (email, password, username ) {
  //validation
  if(!email || !password){
    throw Error('all fields must be filled')
  }
  if(!validator.isEmail(email)){
    throw Error('email is not valid')
  }
  if(!validator.isStrongPassword(password)){ //length min.8
    throw Error('password not strong enough')
  }

  const exist = await this.findOne({email})
  if (exist) {
    throw Error('email is existed')
  }

  const salt = await bcrypt.genSalt(10) // salt is a random string, genSalt() is used to generate a salt.
  const hash = await bcrypt.hash(password, salt) //(plain text pass, salt value)

  const user = await this.create({email, password: hash, username})
  return user
}

//statics login method
userSchema.statics.login = async function (email, password) {
  //validation
  if(!email || !password){
    throw Error('all fields must be filled')
  }

  //email
  const user = await this.findOne({email})
  if (!user) {
    throw Error('incorrect email')
  }

  //password
  const match = await bcrypt.compare(password, user.password)
  if(!match){
    throw Error('incorrect pass')
  }
  return user
}

export default mongoose.model('User', userSchema)