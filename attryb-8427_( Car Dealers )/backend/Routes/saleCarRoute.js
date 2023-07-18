/** @format */

let mongoose = require("mongoose");
let express = require("express");
const { dealerAuth } = require("../Middleware/dealerAuth");

let saleCarRoute = express.Router();

saleCarRoute.get("/", dealerAuth, async (req, res) => {
  res.send("sale car route");
});

module.exports = { saleCarRoute };
