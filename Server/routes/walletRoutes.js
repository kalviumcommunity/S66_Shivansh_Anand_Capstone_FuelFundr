import express from "express";
import { addFundsToWallet } from "../controllers/walletController.js";

const router = express.Router();

router.post("/add", addFundsToWallet);

export default router;
