require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const WorkoutsRouter = require("./routes/workouts");
//middleware
app.use(express.json());

app.use("/api/workouts", WorkoutsRouter);

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
