import { Router } from "express";
import User from "../models/userModel.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { user } = req.body;
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(user))
      throw new Error("Email format error");
    const exist = await User.exists({ email: user });
    if (exist) throw new Error("User already exists");
    const newUser = new User({ email: user });
    await User.create(newUser);
    res.send({ message: "Subscription successfull", type: "success" });
  } catch (error) {
    res.send({ message: error.message, type: "error" });
  }
});

export default router;
