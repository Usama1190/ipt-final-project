import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoute from "./routes/productRoutes.js";
import enums from "./constant/enum.js";

const app = express();

dotenv.config();

const MONGODB = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB)
  .then((req, res) => {
    console.log("MongoDB connect successfully");
  })
  .catch((error) => {
    console.log("Connection failed to Mongodb");
  });

app.use(express.json());

app.use('/products', productRoute);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ status: 200, message: enums.SUCCESS_200 });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}.`);
});
