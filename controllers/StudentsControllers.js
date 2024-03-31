const mongoose = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;
const StudentsSchema = require("../model/StudentModel");

//get all students
const getallstudents = async (req, res) => {
  const students = await StudentsSchema.find().sort({ createdAt: -1 });
  res.status(200).json(students);
};

//get the student by id

//create a new Student Data
const createStudent = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    address,
    gender,
    roll_no,
    enrollment_no,
    year_admission,
    phone,
    sem,
    batch,
  } = req.body;
  try {
    const student = await StudentsSchema.create({
      first_name,
      last_name,
      email,
      address,
      gender,
      roll_no,
      enrollment_no,
      year_admission,
      phone,
      sem,
      batch,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: "Error creating student" });
  }
};

module.exports = {
  getallstudents,
  createStudent,
};
