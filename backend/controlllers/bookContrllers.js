import asyncHandler from "express-async-handler";
import Book from "../models/bookSchema.js";

const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();

  res.json(books);
});

const createBook = asyncHandler(async (req, res) => {
  const newbook = new Book({
    name: req.body.name,
    destination: req.body.destination,
    depTime: req.body.depTime,
    returnTime: req.body.returnTime,
    reason: req.body.reason,
  });

  const createdBook = await newbook.save();
  res.status(201).json(createdBook);
});

export { getAllBooks, createBook };
