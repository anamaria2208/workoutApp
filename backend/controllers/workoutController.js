import mongoose from "mongoose";
import Workout from "../model/workoutSchema.js";

export const getWorkouts = async (req, res) => {
    try {
      const workouts = await Workout.find();
      res.status(200).json(workouts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching workouts" });
    }
  }

export const getWorkoutById = async (req, res) => {
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
  }

export const deleteWorkout =  async (req, res) => {
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
  }

  export const createWorkout = async (req, res) => {
    try {
      const newWorkout = new Workout(req.body);
      const savedWorkout = await newWorkout.save();
      res.status(201).json(savedWorkout);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating workout" });
    }
  }

export const patchWorkout = async (req, res) => {
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
  }