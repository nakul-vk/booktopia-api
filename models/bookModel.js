import mongoose, { mongo } from "mongoose";

const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: String, required: true },
    img: { type: String, required: true },
    genre: {
      type: [String],
      required: true,
    },
    quotes: [String],
    review: {
      type: {
        intro: String,
        summary: String,
        characterization: String,
        themes: String,
        conclusion: String,
      },
      required: true,
    },
    tags: [String],
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);
export default Book;
