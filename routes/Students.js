const express = require("express");

const router = express.Router();
const {
  createStudent,
  getallstudents,
} = require("../controllers/StudentsControllers");
router.get("/", getallstudents);
router.post("/", createStudent);

module.exports = router;
