require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.listen(port, () => {
  console.log(`server is working on ${port}`);
});

app.get("/main", (req, res) => {
  res.json({ status: "pass", downlaod: "true" });
});

app.get("/api/v1/allstudent", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { students: ["name1", "name2"] },
  });
});
app.get("/api/v1/getstudent/:id", (req, res) => {
  console.log(req);
});
app.post("/api/v1/addstudent", (req, res) => {
  console.log(res.body);
});
