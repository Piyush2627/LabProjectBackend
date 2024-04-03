const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "studentsschemas",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  system_used: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
