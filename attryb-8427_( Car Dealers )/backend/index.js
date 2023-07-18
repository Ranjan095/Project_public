/** @format */

let express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./Routes/userRoute");
const { dealerRoute } = require("./Routes/dealerRoute");
const { saleCarRoute } = require("./Routes/saleCarRoute");
require("dotenv").config();

let app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/dealer", dealerRoute);
app.use("/inventory", saleCarRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`port is running at ${process.env.PORT}`);
});
