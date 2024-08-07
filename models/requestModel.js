import mongoose from "mongoose";

const { Schema, model } = mongoose;

const requestSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Request = model("Request", requestSchema);
export default Request;
