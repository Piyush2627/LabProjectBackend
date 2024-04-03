const StudentsSchema = require("../model/StudentModel");
var ObjectId = require("mongoose").Types.ObjectId;

//get all students
const getallstudents = async (req, res) => {
  const students = await StudentsSchema.find().sort({ createdAt: -1 });
  res.status(200).json(students);
};

const getstudentsbatch1 = async (req, res) => {
  const students = await StudentsSchema.find();
};
//get the student by id
const getsinglestudent = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId) {
    return res.status(404).json({ message: "Student not found" });
  }
  const student = await StudentsSchema.findById(id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
};

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
  getsinglestudent,
};
