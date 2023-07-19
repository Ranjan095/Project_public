/** @format */

let mongoose = require("mongoose");
let express = require("express");

let userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  res.send("userPage");
});

module.exports = { userRoute };
