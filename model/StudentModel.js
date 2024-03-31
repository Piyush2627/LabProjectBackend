const mongoose = require("mongoose");
const schema = mongoose.Schema;
const StudentsSchema = new schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  roll_no: {
    type: Number,
    required: true,
  },
  enrollment_no: {
    type: Number,
    required: true,
  },
  year_admission: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  sem: {
    type: Number,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("StudentsSchema", StudentsSchema);
