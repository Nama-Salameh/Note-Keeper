require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.on("open", (error) => console.log("connected to Database"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Listening");
});
