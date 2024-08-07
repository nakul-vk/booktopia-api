import Request from "../models/requestModel.js";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  // check whether requester is a subscribed user else prompt to subscribe - later stage.
  try {
    const { title, author, year } = req.body;
    const newRequest = new Request({ title, author, year });
    await Request.create(newRequest);
    res.send({ message: "Request recieved", type: "success" });
  } catch (error) {
    res.send({ message: error.message, type: "error" });
  }
});

export default router;
