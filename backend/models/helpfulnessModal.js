import mongoose from "mongoose";

const helpfulnessSchema = new mongoose.Schema(
  {
    reviewId: {
      type: mongoose.Types.ObjectId,
      ref: "review",
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    isHelpful: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
helpfulnessSchema.index(
  { reviewId: 1, userId: 1, productId: 1 },
  { unique: true }
);
const HelpfulnessModal = mongoose.model("helpfulness", helpfulnessSchema);
export default HelpfulnessModal;
