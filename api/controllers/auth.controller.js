import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
