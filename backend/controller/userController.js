import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create addUser api
export const addUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check existing user by email
    const users = await User.findOne({ where: { email } });
    if (users) {
      return res.status(400).json({
        message: "email allready registered",
      });
    }

    const hashccode = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hashccode });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// create loginUSer api

export const loginUSer = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email & password required" });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(401).json({ message: "Invalid credentials" });

    console.log("53", process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: user.id, email: user.email, uId: user.id },

      process.env.JWT_SECRET || "sbs123",
      { expiresIn: "1h" },
    );
    res.status(200).json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      uId: user.id,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};
