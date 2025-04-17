import express from "express";
import {
  registerUser,
  getAllUsers,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
