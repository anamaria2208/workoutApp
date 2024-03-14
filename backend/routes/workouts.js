import express from "express";
import Workout from "../model/workoutSchema.js";

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching workouts" });
  }
});

// GET WORKOUT BY ID
router.get("/:id", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching workout" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
    }
    res.send(200).json({ message: "Workout deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting workout" });
  }
});

// CREATE NEW WORKOUT
router.post("/", async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating workout" });
  }
});

// UPDATE WORKOUT
router.patch("/:id", async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return updated workout
    });
    if (!workout) {
      res.status(404).json({message : 'No workout found'});
    }
    res.status(200).json(workout)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating workout" });
  }
});

export default router;
