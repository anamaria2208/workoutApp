import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    workout: {
      type: String,
      reqired: true,
      trim: true,
    },
    load: {
      type: Number,
      reqired: true,
    },
    reps: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;