import mongoose from "mongoose";

const flavorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    qty: { type: number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const Flavor = mongoose.model("flavor", flavorSchema);
export default Flavor;
