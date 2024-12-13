// libreirs
const express = require("express");
const connectToDb = require("./utils/connectToDb");

//routes

const app = express();
app.get("/", (req, res) => {
  res.send("hello from app");
});
app.listen(3000, () => {
  console.log("the serve is runinig in port 3000");
});
