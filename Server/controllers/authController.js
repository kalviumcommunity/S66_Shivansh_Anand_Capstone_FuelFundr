import { dummyusers } from "../dummyUsers.js";

let userIdCounter = dummyusers.length + 1;

// Register a new user
export const registerUser = (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = dummyusers.find((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = {
      id: userIdCounter.toString(),
      name,
      email,
      password,
    };

    dummyusers.push(newUser);
    userIdCounter++;

    res.status(201).json({
      message: "User registered. Check email for verification.",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
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

    if (password === user.password) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: "Login successful",
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
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
