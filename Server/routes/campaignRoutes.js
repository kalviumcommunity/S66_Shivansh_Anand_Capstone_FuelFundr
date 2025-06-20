import express from "express";
import {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  donateToCampaign,
} from "../controllers/campaignController.js";
import { donationLimiter } from "../middlewares/rateLimiter.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

//GET Request
router.get("/",protect, getAllCampaigns);
router.get("/:id",protect, getCampaignById);

//POST Request
router.post("/create",protect, createCampaign);
router.post("/:id/donate",protect, donationLimiter, donateToCampaign);

export default router;
