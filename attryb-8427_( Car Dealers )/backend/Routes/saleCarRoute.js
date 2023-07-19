/** @format */

let mongoose = require("mongoose");
let express = require("express");
const { dealerAuth } = require("../Middleware/dealerAuth");
const { userAuth } = require("../Middleware/userAuth");

let saleCarRoute = express.Router();

saleCarRoute.get("/", userAuth, async (req, res) => {
  res.send("sale car route");
});

module.exports = { saleCarRoute };
