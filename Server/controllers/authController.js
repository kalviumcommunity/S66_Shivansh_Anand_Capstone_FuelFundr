import { dummyusers } from "../dummyUsers.js";
import bcrypt from "bcrypt";

let userIdCounter = dummyusers.length + 1;

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = dummyusers.find((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash with salt rounds = 10

    const newUser = {
      id: userIdCounter.toString(),
      name,
      email,
      password: hashedPassword,
    };

    dummyusers.push(newUser);
    userIdCounter++;

    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Login user and validate credentials
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = dummyusers.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // Compare hashed password
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Fetch all users with limited details
export const getAllUsers = (req, res) => {
  try {
    const filteredUsers = dummyusers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      walletBalance: user.walletBalance,
    }));

    res.status(200).json(filteredUsers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};
