import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

const bookData = [
  {
    id: 1,
    img: "https://via.placeholder.com/150/FFFF00/000000?Text=google.com",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    rating: "5",
    genre: ["Thriller"],
    quote:
      "The more I love humanity in general, the less I love man in particular",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=yttags.com",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: "3.5",
    genre: ["Romance"],
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
    title: "Harry Potter and the Chamber of Secrets",
    author: "JK Rowling",
    rating: "4",
    genre: ["Fiction", "Thriller"],
    quote:
      "Oh well... I'd just been thinking, if you had died, you'd have been welcome to share my toilet",
  },
  {
    id: 4,
    img: "https://www.picsum.photos/",
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    rating: "4.5",
    genre: ["Thriller"],
    quote:
      "The one thing that doesn't abide by majority rule is a person's conscience",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
    title: "Becoming",
    author: "Michelle Obama",
    rating: "2",
    genre: ["Bigoraphy"],
    quote: "God gave us this platform for a reason, let's not waste it",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/150/000000/FFFFFF/?text=y2meta.com",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    rating: "5",
    genre: ["Thriller"],
    quote:
      "To go wrong in one's own way is better than to go right in someone else's.",
  },
];

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
