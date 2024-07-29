import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import { bookData } from "./utils.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello booktopia" });
});

app.get(`/reviews/books/:id`, (req, res) => {
  const id = req.params.id;
  const book = bookData.filter((book) => book.id == id);
  res.send(...book);
});

app.listen(PORT, () => {
  console.log("Listening to port 5555");
});
