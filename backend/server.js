import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDb from "./config/db.js";

import booksRoutes from "./routes/booksRoutes.js";

const app = express();
dotenv.config();

connectDb();

app.use(express.json());

if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

app.use("/api/v1/books", booksRoutes);

app.get("/", (req, res) => {
  res.send("exeat booking api");
});

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`.blue)
);
