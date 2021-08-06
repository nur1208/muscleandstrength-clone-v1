import express from "express";
import expressAsyncHandler from "express-async-handler";
import BrandModal from "../models/brandModal.js";

const brandRouter = express.Router();

brandRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const brand = new BrandModal(req.body);
    console.log(req.body);
    try {
      const createdBrand = await brand.save();
      res.send(createdBrand);
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

export default brandRouter;
