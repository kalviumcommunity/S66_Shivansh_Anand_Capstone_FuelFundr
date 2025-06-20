import Campaign from "../models/Campaign.js";
import Wallet from "../models/Wallet.js";
import { upload, uploadToCloudinary } from "../middlewares/uploadMiddleware.js";

// Create a new campaign
export const createCampaign = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error uploading image", error: err.message });
    }

    uploadToCloudinary(req, res, async (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error uploading to Cloudinary",
          error: err.message,
        });
      }

      try {
        const { title, description, targetAmount, deadline, category } =
          req.body;
        
        const userId = req.userId;

        // Validate required fields if needed (or rely on Mongoose validation)
        if (!title || !description || !targetAmount || !deadline || !category) {
          return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if campaign with same title and user exists in DB
        const existingCampaign = await Campaign.findOne({
          title,
          user: userId,
        });
        if (existingCampaign) {
          return res.status(400).json({
            message: "You already have a campaign with this title",
          });
        }

        // Validate deadline is a future date
        const now = new Date();
        const campaignDeadline = new Date(deadline);

        if (campaignDeadline <= now) {
          return res.status(400).json({
            message: "Deadline must be a future date",
          });
        }

        const imageUrl = req.body.image || null;

        // Create new campaign document
        const newCampaign = new Campaign({
          user: userId,
          title,
          description,
          targetAmount,
          deadline,
          category,
          image: imageUrl,
          raisedAmount: 0,
        });

        await newCampaign.save();

        res.status(201).json({
          success: true,
          message: "Campaign created successfully",
          campaign: newCampaign,
        });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error creating campaign", error: error.message });
      }
    });
  });
};

// Donate to a campaign (wallet + campaign update)
export const donateToCampaign = async (req, res) => {
  try {
    const userId = req.userId;
    const { amount } = req.body;
    const { id: campaignId } = req.params;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid donation request" });
    }

    // Find user wallet
    const wallet = await Wallet.findOne({ user: userId });
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found for user" });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient wallet balance" });
    }

    // Find campaign
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    // Deduct amount from wallet
    wallet.balance -= amount;
    wallet.transactions.push({
      type: "withdrawal",
      amount,
      timestamp: new Date(),
    });
    await wallet.save();

    // Add amount to campaign raisedAmount
    campaign.raisedAmount += amount;
    await campaign.save();

    res.status(200).json({
      success: true,
      message: "Donation successful",
      donatedTo: campaign.title,
      donatedAmount: amount,
      remainingBalance: wallet.balance,
      totalRaised: campaign.raisedAmount,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing donation", error: error.message });
  }
};

// Fetch all campaigns
export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("user", "name email");
    res.status(200).json({ success: true, campaigns });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching campaigns", error: error.message });
  }
};

// Get campaign by ID
export const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.status(200).json({ success: true, campaign });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching campaign", error: error.message });
  }
};
