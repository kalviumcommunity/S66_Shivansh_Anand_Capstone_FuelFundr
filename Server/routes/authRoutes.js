import express from "express";
import {
  registerUser,
  getAllUsers,
  updateUserNameOnce,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update-name", updateUserNameOnce);

export default router;
