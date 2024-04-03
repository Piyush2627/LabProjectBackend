const express = require("express");

const router = express.Router();
const {
  createStudent,
  getallstudents,
  getsinglestudent,
} = require("../controllers/StudentsControllers");
router.get("/", getallstudents);
router.post("/", createStudent);
router.get("/:id", getsinglestudent);

module.exports = router;
