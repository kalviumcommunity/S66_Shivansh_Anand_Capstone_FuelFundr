import express from "express";
import {
  withdrawFunds,
  addFunds,
  getWalletByUser,
} from "../controllers/walletController.js";

const router = express.Router();

router.get("/:userId", getWalletByUser);
router.post("/:userId/add", addFunds);
router.post("/:userId/withdraw", withdrawFunds);

export default router;
