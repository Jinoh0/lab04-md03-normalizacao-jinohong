const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./config/db.config")();

const carRouter = require("./routes/car.routes");
app.use("/car", carRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/review", reviewRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`server up and running at port ${process.env.PORT}`);
});
