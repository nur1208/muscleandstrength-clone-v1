import express from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import CartItem from "../models/cartItemModal.js";
import Cart from "../models/cartModal.js";

const cartRouter = express.Router();

cartRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    // console.log(req.body);
    // const { product } = req.body;
    // const _id = mongoose.Types.ObjectId(product);
    // const cartItem = new CartItem(req.body);

    // const createdCartItem = await cartItem.save();
    // res.send({ createdCartItem });
    const { userId, productId, productType, quantity } = req.body;
    const filter = { user: mongoose.Types.ObjectId(userId) };

    const cart = await Cart.findOne(filter);
    if (cart) {
      const cartItem = await CartItem.findOne({ productType });
      console.log({ cartItem });
      if (cartItem) {
        cartItem.quantity = Number(cartItem.quantity) + Number(quantity);
        await cartItem.save();

        res.send(cart);
      } else {
        const newCartItem = new CartItem({
          product: productId,
          productType,
          quantity,
        });
        const createdCartItem = await newCartItem.save();

        cart.cartItems = [...cart.cartItems, createdCartItem._id];
        const updateCart = await cart.save();

        res.send(updateCart);
      }
    } else {
      const newCart = new Cart({
        user: mongoose.Types.ObjectId(userId),
        cartItems: [productId],
      });
      const createdNewCart = await newCart.save();
      res.send(createdNewCart);
      // res
      //   .status(404)
      //   .send({ message: `user with '${userId}' doesn't have cart` });
    }
  })
);

cartRouter.get(
  "/:userId",
  expressAsyncHandler(async (req, res) => {
    const cart = await Cart.find({ user: req.params.userId })
      .populate({ path: "cartItems", populate: { path: "product" } })
      .exec();

    res.send({ cartItems: cart[0].cartItems });
  })
);

cartRouter.put(
  "/quantity",
  expressAsyncHandler(async (req, res) => {
    const { qty, cartItemId } = req.body;

    const cartItem = await CartItem.findById(cartItemId);

    if (cartItem) {
      cartItem.quantity = Number(qty) || cartItem.quantity;
      const updatedCartItem = await (await cartItem.save())
        .populate({ path: "product" })
        .execPopulate();

      res.send(updatedCartItem);
    } else {
      res.status(404).send({ message: "cartItem not exit" });
    }
  })
);

cartRouter.delete(
  "/",
  expressAsyncHandler(async (req, res) => {
    const { cartItemId } = req.body;
    console.log(cartItemId);
    const cartItem = await CartItem.findById(cartItemId);
    if (cartItem) {
      cartItem.deleteOne();
      res.send({ message: "CartItem Deleted Successfully", cartItemId });
    } else {
      res.status(404).send({ message: "CartItem Not Found" });
    }
  })
);

export default cartRouter;
