require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRouter = require("./routers/workout");

// Middleware Connections
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// Routes

app.use("/api/workout", workoutRouter);
app.get("/new", (req, res) => {
  res.json({ hello: "Hello World!" });
});

// Connection
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("App running in port: " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
