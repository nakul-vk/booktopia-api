import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import { bookData } from "./utils/bookData.js";
import { trendingBooks } from "./utils/trending.js";
import { users } from "./utils/users.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.get(`/books/reviews/:id`, (req, res) => {
  const id = req.params.id;
  const book = bookData.filter((book) => book.id == id);
  res.send(...book);
});

app.get(`/books/search/:value`, (req, res) => {
  const value = req.params.value;
  const book = bookData.filter(
    (book) => book.title.includes(value) || book.author.includes(value)
  );
  res.json(book);
});

app.get(`/books/filters/:filter`, (req, res) => {
  const filters = req.params.filter;
  const filterArr = filters.split(",");
  const result = bookData.filter((book) =>
    filterArr.find(
      (val) =>
        val === book.author || book.genre.includes(val) || val == book.rating
    )
  );
  res.send(result);
});

app.get(`/books/trending`, (req, res) => {
  const books = trendingBooks.map((id) =>
    bookData.find((book) => book.id == id)
  );
  res.send(books);
});

app.post("/user/", (req, res) => {
  const { user } = req.body;
  if (users[user] == undefined) {
    users[user] = user;
    console.log(users);
    res.send("Subscription successfull"); //Safe to add Mongodb database.
  } else {
    console.log(users);
    res.send("User already exists");
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
