const dummyCampaigns = [
  {
    _id: "1",
    title: "Save the Forests",
    description: "A campaign to protect forests.",
    createdBy: { name: "Alice Smith", email: "alice@example.com" },
  },
  {
    _id: "2",
    title: "Clean Ocean Drive",
    description: "Effort to clean up oceans.",
    createdBy: { name: "Bob Johnson", email: "bob@example.com" },
  },
];

const getAllCampaigns = async (req, res) => {
  try {
    // Simulating DB response
    res.status(200).json(dummyCampaigns);
  } catch (error) {
    res.status(500).json({ message: "Error fetching campaigns", error });
  }
};

const getCampaignById = async (req, res) => {
  try {
    const campaign = dummyCampaigns.find((c) => c._id === req.params.id);
    if (!campaign)
      return res.status(404).json({ message: "Campaign not found" });
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: "Error fetching campaign", error });
  }
};

export default { getAllCampaigns, getCampaignById };
