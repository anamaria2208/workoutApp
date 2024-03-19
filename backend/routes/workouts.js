import express from "express";
import Workout from "../model/workoutSchema.js";
import { getWorkouts, getWorkoutById, deleteWorkout, createWorkout, patchWorkout } from "../controllers/workoutController.js";

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", getWorkouts);

// GET WORKOUT BY ID
router.get("/:id", getWorkoutById);

// DELETE
router.delete("/:id",deleteWorkout);

// CREATE NEW WORKOUT
router.post("/", createWorkout);

// UPDATE WORKOUT
router.patch("/:id", patchWorkout);

export default router;
