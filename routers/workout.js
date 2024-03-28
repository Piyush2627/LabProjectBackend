const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

router.get("/", (req, res) => {
  res.json({ success: "Get app workout" });
});

router.get("/:id", (req, res) => {
  res.json({ success: "Get one workout" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ success: "Add one workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ success: "Delete one workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ success: "Update one workout" });
});
module.exports = router;
