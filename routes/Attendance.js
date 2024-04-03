const express = require("express");

const router = express.Router();
const {
  addAttedance,
  getAllAttendance,
} = require("../controllers/AttendanceController");

router.get("/", getAllAttendance);
router.post("/", addAttedance);

module.exports = router;
