import express from "express";
import expressAsyncHandler from "express-async-handler";
import ReviewModal from "../models/reveiwModal.js";
import ReportModal from "../models/reportModal.js";
import HelpfulnessModal from "../models/helpfulnessModal.js";

const reviewRouter = express.Router();

reviewRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const createdReviews = await ReviewModal.insertMany(
        req.body.reviews
      );
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
//

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
    const {
      _id,
      content,
      reviewingAs,
      ratingFavors,
      image,
      rating,
      userGoal,
      helpful,
      notHelpful,
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
      review.helpful =
        (helpful && review.helpful + 1) || review.helpful;
      review.notHelpful =
        (notHelpful && review.notHelpful + 1) ||
        review.notHelpful;
      review.isVerifiedBuyer =
        isVerifiedBuyer || review.isVerifiedBuyer;
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
      res
        .status(404)
        .send({ message: "Review Not Found", error: error });
    }
  })
);

reviewRouter.post(
  "/report",
  expressAsyncHandler(async (req, res) => {
    const { reviewId, userId, productId, userName, content } =
      req.body.report;
    const review = new ReportModal({
      reviewId,
      userId,
      productId,
      userName,
      content,
    });
    const createdReview = await review.save();
    res.send({ createdReview });
  })
);

reviewRouter.get(
  "/numReviews/:id",
  expressAsyncHandler(async (req, res) => {
    const reviewsNum = await ReviewModal.countDocuments({
      productId: req.params.id,
    });

    const reviewsVerifiedNum = await ReviewModal.countDocuments({
      productId: req.params.id,
      isVerifiedBuyer: true,
    });

    res.send({ reviewsNum, reviewsVerifiedNum });
  })
);

reviewRouter.post(
  "/helpfulness",
  expressAsyncHandler(async (req, res) => {
    const { reviewId, userId, productId, isHelpful } =
      req.body.helpfulness;
    const helpfulness = new HelpfulnessModal({
      reviewId,
      userId,
      productId,
      isHelpful,
    });
    const created = await helpfulness.save();

    const review = await ReviewModal.findOne({ _id: reviewId });
    if (review) {
      if (isHelpful) {
        review.helpful = review.helpful + 1;
      } else review.notHelpful = review.notHelpful + 1;
    }

    const updatedReview = await review.save();
    res.send({ created, updatedReview });

    // HelpfulnessModal.remove({ reviewId });
    // res.send({ message: "all deleted" });
  })
);

reviewRouter.get(
  "/helpfulness/:userId/:productId",
  expressAsyncHandler(async (req, res) => {
    const getHelpfulness = await HelpfulnessModal.find({
      productId: req.params.productId,
      userId: req.params.userId,
    });
    res.send({ getHelpfulness });
  })
);

reviewRouter.delete(
  "/helpfulness/:id/:reviewId/:isHelpful",
  expressAsyncHandler(async (req, res) => {
    const { id, isHelpful, reviewId } = req.params;
    await HelpfulnessModal.deleteOne({ _id: id });

    const review = await ReviewModal.findOne({ _id: reviewId });
    if (review) {
      if (isHelpful.localeCompare("true") === 0) {
        review.helpful = review.helpful - 1;
      } else {
        review.notHelpful = review.notHelpful - 1;
      }
    }

    const updatedReview = await review.save();

    res.send({
      message: "item with " + id + " deleted",
      updatedReview,
    });
  })
);

export default reviewRouter;
