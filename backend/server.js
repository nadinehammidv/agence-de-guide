const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

//ENVIROMMENT VARIABLES
const DB = process.env.DB;

// CONNECT TO DATABASE
mongoose
  .connect(
    `mongodb+srv://NADINE:${DB}@cluster0.vnp3sor.mongodb.net/blog-app?retryWrites=true&w=majority`
  )
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((err) => console.log(err));
// MIDDELWEARES

//ROUTES
app.use("/api/user", require("./routes/user"))

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("SEVER IS UP AND RUNNING");
});
