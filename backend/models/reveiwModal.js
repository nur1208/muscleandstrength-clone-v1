import mongoose from "mongoose";

const reviewModalSchema = new mongoose.Schema(
  {
    reviewingAs: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    helpful: { type: Number, default: 0 },
    notHelpful: { type: Number, default: 0 },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    ratingFavors: [
      {
        name: { type: String },
        rating: { type: Number },
        id: { type: String },
      },
    ],
    userGoal: { type: String, default: "" },
    isVerifiedBuyer: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const ReviewModal = mongoose.model("review", reviewModalSchema);
export default ReviewModal;
