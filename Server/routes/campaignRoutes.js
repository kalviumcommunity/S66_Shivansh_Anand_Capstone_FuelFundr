import express from "express";
import campaignController from "../controllers/campaignController.js";

const router = express.Router();

router.get("/", campaignController.getAllCampaigns);
router.get("/:id", campaignController.getCampaignById);

export default router;
