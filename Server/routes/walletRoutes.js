import express from "express";
import {
  withdrawFunds,
  addFunds,
  getWalletByUser,
} from "../controllers/walletController.js";
import { walletLimiter } from "../middlewares/rateLimiter.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/me", protect, getWalletByUser);
router.post("/me/add", protect, walletLimiter, addFunds);
router.post("/me/withdraw", protect, walletLimiter, withdrawFunds);

export default router;
