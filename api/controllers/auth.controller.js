import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { erreorHandler } from "../utils/error.js";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(erreorHandler(500, "Error from the function"));
  }
};
