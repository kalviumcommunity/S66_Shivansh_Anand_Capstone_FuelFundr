import express from "express";
import {
  registerUser,
  getAllUsers,
  loginUser,
} from "../controllers/authController.js";
import { authLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", authLimiter, registerUser);
router.post("/login", authLimiter, loginUser);

export default router;
