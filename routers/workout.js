const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: "Get app workout" });
});

router.get("/:id", (req, res) => {
  res.json({ success: "Get one workout" });
});

router.post("/", (req, res) => {
  res.json({ success: "Add one workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ success: "Delete one workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ success: "Update one workout" });
});
module.exports = router;
