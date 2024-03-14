import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import workoutRouter from "./routes/workouts.js";

// express APP
const app = express();

// VARIABLES CONFIG
dotenv.config();

// MIDDLEWARE
const logMiddleware = (req, res, next) => {
  console.log(`${req.method} method PATH: ${req.path}`);
  next();
};
app.use(logMiddleware);
app.use(express.json());


// ROUTES
app.use('/api/workout', workoutRouter)

// connect to db
async function main() {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log("Connected to database")
    app.listen(process.env.PORT);
  }
  main().catch(err => console.error(err));



