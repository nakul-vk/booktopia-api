import Request from "../models/requestModel.js";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  // check whether requester is a subscribed user else prompt to subscribe - later stage.
  const { title, author, year } = req.body;
  try {
    const newRequest = new Request({ title, author, year });
    await Request.create(newRequest);
    res.send("Request recieved");
  } catch (error) {
    res.send("Error occurred");
  }
});

export default router;
