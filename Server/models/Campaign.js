import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["Startup", "Hackathon", "Innovation"],
      required: true,
    },
    targetAmount: {
      type: Number,
      required: true,
      min: [100, "Target amount must be at least $100"],
    },
    deadline: { type: Date, required: true },
    image: { type: String },
    video: { type: String },
    raisedAmount: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

const Campaign = mongoose.model("Campaign", CampaignSchema);
export default Campaign;
