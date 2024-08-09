import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import bookRouter from "./routes/books.js";
import userRouter from "./routes/users.js";
import requestRouter from "./routes/requests.js";

const app = express();
app.use(express.json());

const { DBURL, PORT } = process.env;

app.use(cors({ origin: "https://booktopia-6ogo.onrender.com/" }));

app.use("/books", bookRouter);
app.use("/user", userRouter);
app.use("/requests", requestRouter);

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
