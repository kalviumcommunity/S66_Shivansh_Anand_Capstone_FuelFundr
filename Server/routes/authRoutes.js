import express from "express";
import {
  registerUser,
  getAllUsers,
  loginUser,
  logoutUser
} from "../controllers/authController.js";
import { authLimiter } from "../middlewares/rateLimiter.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users",protect, getAllUsers);
router.post("/register", authLimiter, registerUser);
router.post("/login", authLimiter, loginUser);
router.get("/logout", authLimiter, logoutUser);

export default router;
