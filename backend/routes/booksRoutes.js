import express from "express";
import { createBook, getAllBooks } from "../controlllers/bookContrllers.js";

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);

export default router;
