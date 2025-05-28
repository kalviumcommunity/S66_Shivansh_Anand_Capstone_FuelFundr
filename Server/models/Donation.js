import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    amount: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", DonationSchema);
export default Donation;
