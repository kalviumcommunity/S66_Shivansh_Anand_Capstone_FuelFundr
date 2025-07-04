import Wallet from "../models/Wallet.js";

// Get wallet details (balance + transactions) by user ID
export const getWalletByUser = async (req, res) => {
  try {
    const userId = req.userId;

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
    const userId = req.userId;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid amount" });
    }

    // Atomically update balance and push transaction
    const updatedWallet = await Wallet.findOneAndUpdate(
      { user: userId },
      {
        $inc: { balance: amount },
        $push: {
          transactions: {
            type: "deposit",
            amount,
            date: new Date(),
          },
        },
      },
      {
        new: true, 
        upsert: true, 
      }
    );

    res.status(200).json({
      success: true,
      message: `Added $${amount} to wallet`,
      balance: updatedWallet.balance,
      transactions: updatedWallet.transactions,
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
    const userId = req.userId;
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
      message: `Withdrawn $${amount} from wallet`,
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
