import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";

import userRoutes from "./src/routes/userRoute.js"

const app = express();

//middleware
dotenv.config();
app.use(cors());
app.use(express.json())

//connect to db
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening on port ", process.env.PORT)
  })
})
.catch((error) => {
  console.log(error)
})

//route
app.use('/api/auth', userRoutes)

app.get( '/', (req, res) => {
  console.log("welcome to API mutyyyy untuk apa hayooo")
  res.json("welcome halo to API mutyyyy untuk apa hayooo")
})