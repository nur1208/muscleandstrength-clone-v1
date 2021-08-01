import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, required: true },
    cartItems: [{ type: mongoose.Types.ObjectId, ref: "cartItem" }],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);
export default Cart;
