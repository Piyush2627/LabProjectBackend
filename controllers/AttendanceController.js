const attendanceSchema = require("../model/attendanceSchema");

const getAllAttendance = async (req, res) => {
  const allAttendance = await attendanceSchema.find();
  res.status(200).json(allAttendance);
};

const addAttedance = async (req, res) => {
  const { student, date, status, system_used, comment } = req.body;
  try {
    const addAttedance = await attendanceSchema.create({
      student,
      date,
      status,
      system_used,
      comment,
    });
    res.status(200).json(addAttedance);
  } catch (error) {
    res.status(400).json({ message: "Error creating addAttedance" });
  }
};

module.exports = {
  addAttedance,
  getAllAttendance,
};
