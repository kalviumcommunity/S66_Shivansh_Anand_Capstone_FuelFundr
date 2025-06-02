import express from "express";
import {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  donateToCampaign,
} from "../controllers/campaignController.js";
import { donationLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

//GET Request
router.get("/", getAllCampaigns);
router.get("/:id", getCampaignById);

//POST Request
router.post("/create", createCampaign);
router.post("/:id/donate", donationLimiter, donateToCampaign);

export default router;
