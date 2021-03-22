import express from "express";
import expressAsyncHandler from "express-async-handler";
import ReviewModal from "../models/reveiwModal.js";

const reviewRouter = express.Router();

reviewRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const createdReviews = await ReviewModal.insertMany(req.body.reviews);
      res.send({ createdReviews });
    } catch (error) {
      res.status(404).send({ message: error });
    }
  })
);

reviewRouter.get(
  "/getAll/:productId/:limit",
  expressAsyncHandler(async (req, res) => {
    const reviews = await ReviewModal.find(
      {
        productId: req.params.productId,
      },
      null,
      { limit: Number(req.params.limit) }
    );
    res.send({ reviews });
  })
);

reviewRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const {
      reviewingAs,
      image,
      rating,
      content,
      userId,
      productId,
      ratingFavors,
      userGoal,
      isVerifiedBuyer,
    } = req.body.review;
    const review = new ReviewModal({
      reviewingAs,
      image,
      rating,
      content,
      userId,
      productId,
      ratingFavors,
      userGoal,
      isVerifiedBuyer,
    });
    const createdReview = await review.save();
    res.send({ createdReview });
  })
);

// reviewRouter.put(
//   "/update",
//   expressAsyncHandler(async (req, res) => {
//     console.log(req.body);

//     const { _id: newId, content: newContent } = req.body;

//     const updateReview = ReviewModal.update(
//       { rating: 60 },
//       { content: newContent }
//     );

//     res.send({ updateReview });
//   })
// );

reviewRouter.put(
  "/update",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const {
      _id,
      content,
      reviewingAs,
      ratingFavors,
      image,
      rating,
      userGoal,
      isVerifiedBuyer,
    } = req.body.review;
    const review = await ReviewModal.findById(_id);
    if (review) {
      review.content = content || review.content;
      review.reviewingAs = reviewingAs || review.reviewingAs;
      review.ratingFavors = ratingFavors || review.ratingFavors;
      review.image = image || review.image;
      review.rating = rating || review.rating;
      review.userGoal = userGoal || review.userGoal;
      review.isVerifiedBuyer = isVerifiedBuyer || review.isVerifiedBuyer;
      const updatedReview = await review.save();
      res.send({ updatedReview });
    } else {
      res.status(401).send({ message: "Review Not Found" });
    }
  })
);

reviewRouter.delete(
  "/delete",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    console.log(req.data);
    const { _id, userId } = req.body;
    try {
      const review = await ReviewModal.findById(_id);
      if (review.userId.equals(userId)) {
        review.deleteOne();
        res.send({ message: "Review Deleted Successfully" });
      } else {
        res.status(422).send({ message: "invalid user" });
      }
    } catch (error) {
      res.status(404).send({ message: "Review Not Found", error: error });
    }
  })
);

export default reviewRouter;
