import express from "express";
import {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  donateToCampaign,
} from "../controllers/campaignController.js";

const router = express.Router();

//GET Request
router.get("/", getAllCampaigns);
router.get("/:id", getCampaignById);

//POST Request
router.post("/create", createCampaign);
router.post("/:id/donate", donateToCampaign);

export default router;
