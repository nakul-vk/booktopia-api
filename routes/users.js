import { Router } from "express";
import User from "../models/userModel.js";

const router = Router();

router.post("/", async (req, res) => {
  const { user } = req.body;
  const exist = await User.exists({ email: user });
  if (!exist) {
    const newUser = new User({ email: user });
    try {
      await User.create(newUser);
      res.send({ message: "Subscription successfull", type: "success" });
    } catch (error) {
      res.send({ message: error.message, type: "error" });
    }
  } else {
    res.send({ message: "User already exists", type: "error" });
  }
});

export default router;
