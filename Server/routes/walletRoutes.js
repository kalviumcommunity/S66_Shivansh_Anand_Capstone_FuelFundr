import express from "express";
import {
  withdrawFunds,
  addFunds,
  getWalletByUser,
} from "../controllers/walletController.js";
import { walletLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.get("/:userId", getWalletByUser);
router.post("/:userId/add", walletLimiter, addFunds);
router.post("/:userId/withdraw", walletLimiter, withdrawFunds);

export default router;
