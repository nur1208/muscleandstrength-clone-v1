import mongoose from "mongoose";

const brandModalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    title: { type: String },
    video: { type: String },
  },
  {
    timestamps: true,
  }
);

const BrandModal = mongoose.model("brand", brandModalSchema);
export default BrandModal;
