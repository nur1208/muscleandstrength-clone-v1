import express from "express";
import expressAsyncHandler from "express-async-handler";
import Deal from "../models/DealModal.js";
import Product from "../models/productModal.js";
import {
  topDeal,
  topRated,
  trending,
  brands,
  storeContents,
} from "../storeData.js";
import { getThisWeek } from "../utilities/getThisWeek.js";

const productsRouter = express.Router();

productsRouter.get("/getTopDeals", (req, res) => {
  res.send({
    topDeal,
    topRated,
    trending,
    brands,
    storeContents,
  });
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
  "/productsWithDeal",
  expressAsyncHandler(async (req, res) => {
    // find all the product that has deals (deals not null)
    const productsWithDeals = await Product.find({
      deals: { $ne: null },
    });

    res.send(productsWithDeals);

    try {
      // find all the product that has deals (deals not null)
      // $ne selects the documents
      //  where the value of the field is not equal
      // to the specified value
      const productsWithDeals = await Product.find({
        deals: { $ne: null },
      });

      res.send(productsWithDeals);
    } catch (error) {
      res.status(500).send({ error });
    }

    // entrants.find({ pincode: { $ne: null } });
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

productsRouter.post(
  "/deal",
  expressAsyncHandler(async (req, res) => {
    const deal = await new Deal(req.body).save();

    res.send(deal);
    // const newDeal = deal.save();
  })
);

productsRouter.put(
  "/",
  expressAsyncHandler(async (req, res) => {
    const { productId, deal, brand } = req.body;

    const product = await Product.findById(productId);

    if (product) {
      // if deal is array not string
      if (typeof product.deals !== "string") {
        // if deal exit then add it to product.deal array
        // else then just return product.deal array
        // that's what's up and the following lines
        // maybe one line or two.
        product.deals =
          (deal && [...product.deals, deal]) || product.deals;
      } else {
        // deal is array
        product.deals =
          (deal && [product.deals, deal]) || product.deals;
      }

      product.brand = brand || product.brand;

      const updateProduct = await product.save();
      res.send(updateProduct);

      // if product not exist send to the user 404 response
    } else {
      res.status(404).send({ message: "product not exits" });
    }
  })
);

productsRouter.get(
  "/thisWeekDeal",
  expressAsyncHandler(async (req, res) => {
    const { firstDay, lastDay } = getThisWeek();

    const dealsOfThisWeek = await Deal.find({
      createdAt: { $gte: firstDay, $lte: lastDay },
    }).populate("belongTo");

    res.send(dealsOfThisWeek);
  })
);

productsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log({ name: product.name });
    res.send(product);
  })
);

export default productsRouter;
