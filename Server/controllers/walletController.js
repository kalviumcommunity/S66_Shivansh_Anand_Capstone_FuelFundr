import Wallet from "../models/Wallet.js";

// Get wallet details (balance + transactions) by user ID
export const getWalletByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const wallet = await Wallet.findOne({ user: userId });
    if (!wallet) {
      return res
        .status(404)
        .json({ success: false, message: "Wallet not found" });
    }

    res.status(200).json({
      success: true,
      wallet: {
        balance: wallet.balance,
        transactions: wallet.transactions,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch wallet",
      error: error.message,
    });
  }
};

// Add money to wallet (deposit)
export const addFunds = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid amount" });
    }

    let wallet = await Wallet.findOne({ user: userId });
    if (!wallet) {
      // Create wallet if not found
      wallet = new Wallet({ user: userId, balance: 0, transactions: [] });
    }

    // Update balance atomically & add transaction
    wallet.balance += amount;
    wallet.transactions.push({
      type: "deposit",
      amount,
    });

    await wallet.save();

    res.status(200).json({
      success: true,
      message: `Added $${amount} to wallet`,
      balance: wallet.balance,
      transactions: wallet.transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add funds",
      error: error.message,
    });
  }
};

// Withdraw money from wallet
export const withdrawFunds = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid amount" });
    }

    const wallet = await Wallet.findOne({ user: userId });
    if (!wallet) {
      return res
        .status(404)
        .json({ success: false, message: "Wallet not found" });
    }

    if (wallet.balance < amount) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient balance" });
    }

    wallet.balance -= amount;
    wallet.transactions.push({
      type: "withdrawal",
      amount,
    });

    await wallet.save();

    res.status(200).json({
      success: true,
      message: `Withdrawn ₹${amount} from wallet`,
      balance: wallet.balance,
      transactions: wallet.transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to withdraw funds",
      error: error.message,
    });
  }
};
