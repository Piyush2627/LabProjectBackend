const { mongoose } = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;
const WorkoutSchema = require("../model/WorkoutModel");

//get all the workouts
const getallworkouts = async (req, res) => {
  const workouts = await WorkoutSchema.find().sort({ createdAt: -1 });
  res.status(200).json(workouts);
};
//get the workout by id
const getsingleworkout = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId) {
    return res.status(404).json({ message: "Workout not found" });
  }
  const workout = await WorkoutSchema.findById(id);
  if (!workout) {
    return res.status(404).json({ message: "Workout not found" });
  }
  res.status(200).json(workout);
};
//post the workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await WorkoutSchema.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: "Error creating workout" });
  }
};
//delete the workout

const deleteworkout = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId) {
    return res.status(404).json({ message: "Workout not found" });
  }
  const workout = await WorkoutSchema.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ message: "Workout not found" });
  }
  res.status(200).json(workout);
};
//update the workout

const updateworkout = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId) {
    return res.status(404).json({ message: "Workout not found" });
  }
  const workout = await WorkoutSchema.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ message: "Workout not found" });
  }
  res.status(200).json(workout);
};

//export the workout

module.exports = {
  createWorkout,
  getallworkouts,
  getsingleworkout,
  deleteworkout,
  updateworkout,
};
