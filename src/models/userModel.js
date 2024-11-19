import mongoose from "mongoose";
import bcrypt from "bcrypt"
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
  }
})

//static signup method
userSchema.statics.signup = async function (email, password, username ) {
  const exist = await this.findOne({email})
  if (exist) {
    throw Error('email is existed')
  }

  const salt = await bcrypt.genSalt(10) // salt is a random string, genSalt() is used to generate a salt.
  const hash = await bcrypt.hash(password, salt) //(plain text pass, salt value)

  const user = await this.create({email, password: hash, username})
  return user
}

export default mongoose.model('User', userSchema)