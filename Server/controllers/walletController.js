import { dummyusers } from "../dummyUsers.js";

export const addFundsToWallet = (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const user = dummyusers.find((u) => u.id === "10");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.walletBalance += amount;

    res.json({
      message: "Funds added successfully",
      walletBalance: user.walletBalance,
    });
  } catch (error) {
    console.error("Error adding funds:", error);
    res.status(500).json({ message: "Error adding funds" });
  }
};
