import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    balance: { type: Number, default: 0 },
    transactions: [
      {
        type: {
          type: String,
          required: true,
        },
        amount: { type: Number, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
