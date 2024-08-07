import Book from "../models/bookModel.js";
import { Router } from "express";

const router = Router();

router.get(`/reviews/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id).exec();
    res.send(book);
  } catch (error) {
    res.send(error.message);
  }
});

router.get(`/search`, async (req, res) => {
  const { value } = req.query;
  try {
    const books = await Book.find(
      {
        $or: [
          { title: new RegExp(value, "i") },
          { author: new RegExp(value, "i") },
        ],
      },
      "title author rating img"
    ).exec();
    res.send(books);
  } catch (error) {
    res.send(message.error);
  }
});

router.get(`/filters`, async (req, res) => {
  const filters = req.query;
  const query = {};
  if (filters.genre && filters.genre.length > 0) {
    query.genre = { $in: filters.genre };
  }
  if (filters.author && filters.author.length > 0) {
    query.author = { $in: filters.author };
  }
  if (filters.rating && filters.rating.length > 0) {
    query.rating = { $in: filters.rating };
  }
  try {
    const books = await Book.find(query, "author title img rating").exec();
    res.send(books);
  } catch (error) {
    res.send(error.message);
  }
});

router.get(`/trending`, async (req, res) => {
  try {
    const trendingBooks = await Book.find(
      { tags: "trending" },
      "title author img rating quotes"
    ).exec();
    res.send(trendingBooks);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
