import mongoose from "mongoose";

const SchemaSupProduct = new mongoose.Schema(
  {
    mainProduct: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    price: { type: Number, required: true },
    image: { type: String },
    size: { type: String, required: true },
    deals: [
      {
        type: mongoose.Types.ObjectId,
        ref: "deal",
      },
    ],
    servings: { type: Number },
    perServingPrice: { type: Number },
    pointPerUnit: { type: Number, default: 0 },
    // flavors: [{ type: mongoose.Types.ObjectId, ref: "flavor" }],
    flavors: [
      { name: String, qty: { type: Number, default: 1 } },
    ],
  },
  {
    timestamps: true,
  }
);

const SupProduct = mongoose.model(
  "supProduct",
  SchemaSupProduct
);
export default SupProduct;
