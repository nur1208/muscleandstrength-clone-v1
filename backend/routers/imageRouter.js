import express from "express";

const imageRouter = express.Router();

imageRouter.get("/stars-svg-overlay.svg", (req, res) => {
  res.sendFile(
    "C:/Users/DELL/Desktop/creativity/myWebsites/muscleandstrength-clone-v1/backend/view/stars-svg-overlay.svg"
  );
});

export default imageRouter;
