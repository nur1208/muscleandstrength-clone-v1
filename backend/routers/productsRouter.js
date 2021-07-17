import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModal.js";
import {
  topDeal,
  topRated,
  trending,
  brands,
  storeContents,
} from "../storeData.js";

const productsRouter = express.Router();

productsRouter.get("/getTopDeals", (req, res) => {
  res.send({ topDeal, topRated, trending, brands, storeContents });
});

productsRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const {
      name,
      image,
      brand,
      description,
      features,
      rating,
      numReviews,
      numReviewsVerified,
      category,
      ingredient,
      directions,
      warning,
      graphData,
      topRated,
    } = req.body;
    const product = new Product({
      name,
      image,
      brand,
      description,
      features,
      rating,
      numReviews,
      numReviewsVerified,
      graphData,
      topRated,
      category,
      ingredient,
      directions,
      warning,
    });
    const createdProduct = await product.save();
    res.send({ createdProduct });
  })
);

productsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
  })
);

productsRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const {
      name,
      image,
      brand,
      description,
      features,
      rating,
      numReviews,
      numReviewsVerified,
      graphData,
      topRated,
      category,
      ingredient,
      directions,
      warning,
      extraInfo,
      price,
      buyingOption,
      recommended,
      usersReview,
      nutritionInfo,
      qty,
      type,
    } = req.body.product;

    const product = new Product({
      name,
      image,
      brand,
      description,
      features,
      rating,
      numReviews,
      numReviewsVerified,
      graphData,
      topRated,
      category,
      ingredient,
      directions,
      warning,
      extraInfo,
      price,
      buyingOption,
      recommended,
      usersReview,
      nutritionInfo,
      qty,
      type,
    });
    const createdProduct = await product.save();
    res.send({ createdProduct });
  })
);

productsRouter.get(
  "/search/numOfProducts/:productName",
  expressAsyncHandler(async (req, res) => {
    const numOfProducts = await Product.countDocuments({
      name: { $regex: req.params.productName, $options: "i" },
    });

    res.send({ numOfProducts });
  })
);

productsRouter.get(
  "/search/:productName/:limit",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find(
      {
        name: { $regex: req.params.productName, $options: "i" },
      },
      null,
      { limit: Number(req.params.limit) }
    );
    if (products.length !== 0) {
      res.send({ products });
    } else {
      res.status(404).send({
        message: `products with '${req.params.productName}' name is not exist in the database`,
      });
    }
  })
);

export default productsRouter;
