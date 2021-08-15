import express from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Deal from "../models/DealModal.js";
import Product from "../models/productModal.js";
import SupProduct from "../models/supProductModal.js";
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
    //$regex: req.params.productName is for searching with
    // if name include the value of productName for example
    // "r" will show the the product that has r in their name.
    //$options: "i" is for case insensitive match
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

    // $ne means not equal
    // const products = await Product.find({
    //   name: { $regex: req.params.productName, $options: "i" },
    //   _id: { $ne: "603cd94f39e7893b1cb3e4ed" },
    // });
    if (products.length !== 0) {
      //   const productId =
      //     mongoose.mongo.ObjectID.createFromHexString(
      //       "603cd94f39e7893b1cb3e4ed"
      //     );
      //   const newProducts = products.filter((product) =>
      //     product._id.equals(productId)
      //   );
      //   products = newProducts;
      console.log({ productLength: products.length });
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

//TODO for now just bring the product that have been rated.
productsRouter.get(
  "/topRatedProducts",
  // it is good practice to name the variable
  // that you not going to use to "_".
  expressAsyncHandler(async (_, res) => {
    // if product have first element in userReview so
    // the product has been rated.
    const productsHasBeenRated = await Product.find({
      "usersReview.0": { $exists: true },
    });

    res.send(productsHasBeenRated);
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

productsRouter.get(
  "/version2/:id",
  expressAsyncHandler(async (req, res) => {
    // nasty populate
    const product = await Product.find({
      _id: req.params.id,
    })
      .populate({
        path: "supProducts",
        populate: { path: "deals" },
      })
      .populate("brand");

    if (product) {
      res.send(product[0]);
    } else {
      res.status(404).send({ message: "product id not exist" });
    }
  })
);

productsRouter.post(
  "/supProduct",
  expressAsyncHandler(async (req, res) => {
    const { data: dataWithDeal } = req.body;
    // console.log({ data: dataWithDeal });

    // remove deal from dataWthDeal and put it and separate
    // variable (deal).
    const { deal, ...data } = dataWithDeal;
    try {
      // create new SupProduct modal save it in the database
      const newSupProduct = new SupProduct(data);

      // create new Deal modal and set 'belongTo' to the new
      // created supProduct id and save it in the database
      const newDeal = await new Deal({
        ...deal,
        belongTo: newSupProduct._id,
      }).save();

      //add new created deal id to "deals" attribute of the new
      // created supProduct
      newSupProduct.deals = [
        newDeal._id,
        ...newSupProduct.deals,
      ];

      // SupProduct modal save it in the database
      await newSupProduct.save();

      // find the main product
      const mainProduct = await Product.findById(
        data.mainProduct
      );
      // if the product with data.mainProduct id exit
      if (mainProduct) {
        // add created supProduct to the main product
        mainProduct.supProducts = [
          newSupProduct,
          ...mainProduct.supProducts,
        ];
        console.log({ newSupProduct, mainProduct });
        // save the new update for mainProduct
        const updateProduct = await mainProduct.save();
        /// send the update product to caller.
        res.send(updateProduct);
        // else product with data.mainProduct id not exit
      } else {
        /// send message error to caller.
        res
          .status(404)

          .send({ message: "main product id not exist" });
      }
      // if there were unexpected error
    } catch (error) {
      /// send message error to caller.
      res.status(500).send({ message: error.message });
    }
  })
);

export default productsRouter;
