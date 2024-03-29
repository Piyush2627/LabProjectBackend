const express = require("express");
const router = express.Router();
//controllers
const {
  createWorkout,
  getallworkouts,
  getsingleworkout,
  deleteworkout,
  updateworkout,
} = require("../controllers/WorkoutControllers");

router.get("/", getallworkouts);

router.get("/:id", getsingleworkout);

router.post("/", createWorkout);

router.delete("/:id", deleteworkout);

router.patch("/:id", updateworkout);

module.exports = router;
