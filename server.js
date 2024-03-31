require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const WorkoutsRouter = require("./routes/workouts");
const StudentsRouter = require("./routes/Students");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/workouts", WorkoutsRouter);
app.use("/api/students", StudentsRouter);
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
