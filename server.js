require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StudentsRouter = require("./routes/Students");
const AttedanceRouter = require("./routes/Attendance");
const cors = require("cors");

//middleware
app.use(cors(
  {
origin: ["https://lab-project-backend-git-main-labs-projects-c89fd667.vercel.app/"],
methods: ["POST", "GET"],
credentials: true
} 
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/students", StudentsRouter);
app.use("/api/attendance", AttedanceRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
