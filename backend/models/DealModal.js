import mongoose from "mongoose";

const DealSchema = new mongoose.Schema(
  {
    // title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    belongTo: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "product",
    },
    expiredAt: Date,
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("deal", DealSchema);
export default Deal;
