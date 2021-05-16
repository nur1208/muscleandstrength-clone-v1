import express from "express";
import cloudinary from "cloudinary";
import expressAsyncHandler from "express-async-handler";

import cors from "cors";

const imageRouter = express.Router();

imageRouter.get("/stars-svg-overlay.svg", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/Desktop/creativity/myWebsites/muscleandstrength-clone-v1/backend/view/stars-svg-overlay.svg"
  );
});

cloudinary.config({
  cloud_name: "nur1208",
  api_key: "835228356161737",
  api_secret: "6wHf3oQmwOcRtO4dXhHylmLhPqU",
  // proxy: "http://127.0.0.1:55448",
});

imageRouter.post(
  "/image-upload",
  expressAsyncHandler(async (req, res) => {
    console.log("here");
    console.log(req.files);
    const values = Object.values(req.files);
    // const path = Object.values(Object.values(req.files)[0])[0].path;

    try {
      const results = await cloudinary.uploader.upload(values[0].path);
      console.log(results);
      res.json(results);
    } catch (error) {
      console.log(error);
    }

    // const promises = values.map((image) =>
    //   cloudinary.uploader.upload(image.path)
    // );

    // Promise.all(promises).then((results) => res.json(results));
  })
);

export default imageRouter;
