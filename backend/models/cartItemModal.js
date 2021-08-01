import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    quantity: { type: Number, default: 1 },
    productType: String,
  },
  {
    timestamps: true,
  }
);

const CartItem = mongoose.model("cartItem", cartItemSchema);
export default CartItem;
