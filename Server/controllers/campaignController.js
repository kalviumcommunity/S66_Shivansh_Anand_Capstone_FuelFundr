import { dummyCampaigns } from "../dummyCampaigns.js";
import { dummyusers } from "../dummyUsers.js";
import { upload, uploadToCloudinary } from "../middlewares/uploadMiddleware.js";

let campaignIdCounter = dummyCampaigns.length + 1;

// Controller to create a new campaign
export const createCampaign = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error uploading image", error: err.message });
    }

    uploadToCloudinary(req, res, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error uploading to Cloudinary",
          error: err.message,
        });
      }

      try {
        const { title, description, targetAmount, deadline, category, user } =
          req.body;

        if (!user || !user.name || !user.email) {
          return res
            .status(400)
            .json({ message: "User info missing in request" });
        }

        // Check if a campaign with the same title and user already exists
        const existingCampaign = dummyCampaigns.find(
          (campaign) =>
            campaign.title === title && campaign.createdBy.email === user.email
        );

        if (existingCampaign) {
          return res.status(400).json({
            message: "Campaign already exists with the same title and user",
          });
        }

        const imageUrl = req.body.image || null;

        // Create the new campaign object
        const newCampaign = {
          id: campaignIdCounter.toString(),
          title,
          description,
          targetAmount,
          deadline,
          category,
          image: imageUrl,
          createdBy: {
            name: user.name,
            email: user.email,
          },
          raisedAmount: 0,
          status: "active",
        };

        dummyCampaigns.push(newCampaign);
        campaignIdCounter++;

        res.status(201).json(newCampaign);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error creating campaign", error: error.message });
      }
    });
  });
};

// Controller to donate to a campaign
export const donateToCampaign = (req, res) => {
  const { userId, amount } = req.body;
  const { id: campaignId } = req.params;

  if (!userId || !amount || amount <= 0) {
    return res.status(400).json({ message: "Invalid donation request" });
  }

  const user = dummyusers.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.walletBalance < amount) {
    return res.status(400).json({ message: "Insufficient wallet balance" });
  }

  const campaign = dummyCampaigns.find(
    (c) => c.id === campaignId || c._id === campaignId
  );
  if (!campaign) {
    return res.status(404).json({ message: "Campaign not found" });
  }

  user.walletBalance -= amount;

  if (!campaign.raisedAmount) campaign.raisedAmount = 0;
  campaign.raisedAmount += amount;

  res.status(200).json({
    message: "Donation successful",
    donatedTo: campaign.title,
    donatedAmount: amount,
    remainingBalance: user.walletBalance,
    totalRaised: campaign.raisedAmount,
  });
};

// Controller to fetch all campaigns
export const getAllCampaigns = async (req, res) => {
  try {
    res.status(200).json(dummyCampaigns); // Return the list of campaigns
  } catch (error) {
    res.status(500).json({ message: "Error fetching campaigns", error });
  }
};

export const updateCampaignInfo = (req, res) => {
  const { id } = req.params;
  const { title, description, targetAmount, deadline, category } = req.body;

  const campaign = dummyCampaigns.find((c) => c.id === id);
  if (!campaign) return res.status(404).json({ message: "Campaign not found" });

  if (title) campaign.title = title;
  if (description) campaign.description = description;
  if (targetAmount) campaign.targetAmount = targetAmount;
  if (deadline) campaign.deadline = deadline;
  if (category) campaign.category = category;

  res.status(200).json({ message: "Campaign updated", campaign });
};

export const updateCampaignStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const campaign = dummyCampaigns.find((c) => c.id === id);
  if (!campaign) return res.status(404).json({ message: "Campaign not found" });

  if (!["active", "completed", "paused"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  campaign.status = status;

  res.status(200).json({ message: "Campaign status updated", campaign });
};

// Controller to fetch a single campaign by its ID
export const getCampaignById = async (req, res) => {
  try {
    const campaign = dummyCampaigns.find((c) => c.id === req.params.id);
    if (!campaign)
      return res.status(404).json({ message: "Campaign not found" });
    res.status(200).json(campaign); // Return the campaign details
  } catch (error) {
    res.status(500).json({ message: "Error fetching campaign", error });
  }
};
