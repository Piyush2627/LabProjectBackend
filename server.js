require("dotenv").config();
const express = require("express");
const db = require("./db/index");
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.listen(port, () => {
  console.log(`server is working on ${port}`);
});

app.get("/main", (req, res) => {
  res.json({ status: "pass", downlaod: "true" });
});

app.get("/api/v1/allstudent", async (req, res) => {
  const result = await db.query("SELECT * FROM client;");
  console.log(result);
  res.status(200).json({
    status: "success",
    data: { students: ["name1", "name2"] },
  });
});
app.get("/api/v1/getstudent/:id", (req, res) => {
  console.log(req);
});

app.post("/api/v1/addstudent", function (req, res) {
  console.log("receiving data ...");
  console.log("body is ", req.body);
});
