import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  deleteReview,
  updateReview,
} from "../../actions/reviewAction";
import { LoadingTwo } from "../LoadingTwo";
import { RatingBox } from "./RatingBox";
import { SelectRating } from "./SelectRating";

export const Reviewing = () => {
  require("../../styles/reviewing.css");
  const limitWordsDefault = -60;
  const [limitWords, seTLimitWords] = useState(limitWordsDefault);
  const [text, setText] = useState("");
  const [isPassLimitWords, setIsPassLimitWords] = useState(false);
  const [isWriteMoreMode, setIsWriteMoreMode] = useState(false);
  const [editMemberName, setEditMemberName] = useState(false);
  const [reviewingAs, setReviewingAs] = useState("md n");
  const [isUnvaluedName, IsUnvaluedName] = useState(false);
  const [resetRating, setResetRating] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [mainRating, setMainRating] = useState(0);
  const [selectedFavors, setSelectedFavors] = useState([]);
  const [reviewingInputStyle, setReviewingInputStyle] = useState("block");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch(null);

  const userSingIn = useSelector((state) => state.userSingIn);
  const { userInfo } = userSingIn;

  const productOne = useSelector((state) => state.productOne);
  const { product } = productOne;

  const reviewAdd = useSelector((state) => state.reviewAdd);
  const { success, review: createdReview } = reviewAdd;

  const handleClear = () => {
    setText("");
    setIsPassLimitWords(false);
    setIsWriteMoreMode(false);
    setEditMemberName(false);
    setResetRating(true);

    if (isPosted) dispatch(deleteReview(createdReview._id, userInfo._id));
  };

  useEffect(() => {
    if (success) {
      setIsPosted(true);
      toggleReviewingInput();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  // useEffect(() => {
  //   setReviewingInputStyle(isPosted ? "none" : "block");
  // }, [isPosted]);

  const toggleReviewingInput = () => {
    setReviewingInputStyle(
      reviewingInputStyle.localeCompare("none") ? "none" : "block"
    );
  };

  // const reviews = [
  //   {
  //     userId: "5fe9b9e2e52187156472ac4c",
  //     rating: 60,
  //     ratingFavors: [
  //       {
  //         rating: 80,
  //         name: "Pink Mango Slice",
  //         id: "5fe9b9e2e52187156472ac4c",
  //       },
  //     ],
  //     reviewingAs: "Robert",
  //     image: "/images/defaultUserImage",
  //     content:
  //       "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //     helpful: 9,
  //     notHelpful: 1,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       {
  //         rating: 40,
  //         name: "Cherry Limeade",
  //         id: "5fe9b9e2e52187156472ac4c",
  //       },
  //     ],
  //     reviewingAs: "Ahmed E",
  //     image: "/images/defaultUserImage",
  //     content:
  //       "about to finish my first one , I think it's useless , diet is the key",
  //     helpful: 4,
  //     notHelpful: 0,
  //     isVerifiedBuyer: true,
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 100,
  //     ratingFavors: [
  //       {
  //         rating: 40,
  //         name: "Pineapple Shred",
  //         id: "5fe9b9e2e52187156472ac4c",
  //       },
  //       {
  //         rating: 100,
  //         name: "Raspberry Lemonade",
  //         id: "5fe9b9e2e52187156472ac4c",
  //       },
  //     ],
  //     reviewingAs: "Andrea C",
  //     content:
  //       "Great product. Use it in the mornings and then as a pre-workout.",
  //     helpful: 3,
  //     notHelpful: 0,
  //     isVerifiedBuyer: true,
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //     image: "/images/defaultUserImage",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  //   {
  //     userId: "5feaf9b01969e21de82b0980",
  //     rating: 60,
  //     ratingFavors: [
  //       { rating: 80, name: "Razor Lime", id: "5fe9b9e2e52187156472ac4c" },
  //     ],
  //     reviewingAs: "krista k",
  //     content:
  //       "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //     helpful: 4,
  //     notHelpful: 0,
  //     userGoal: "Build Muscle",
  //     isVerifiedBuyer: true,
  //     image: "/images/defaultUserImage",
  //     productId: "603cd94f39e7893b1cb3e4ed",
  //   },
  // ];

  const handlePost = () => {
    const image = userInfo.image || "/image/defaultUserImage.jpg";
    const rating = mainRating;
    const content = text;
    const userId = userInfo._id;
    const productId = product._id;
    const ratingFavors = selectedFavors.map((favor) => {
      const newFavor = {};
      newFavor.name = favor.title;
      newFavor.rating = favor.rating;
      newFavor.id = favor._id;
      return newFavor;
    });
    const userGoal = userInfo.goal || "Build Muscle";
    const isVerifiedBuyer = false;
    // const review = {
    //   reviewingAs,
    //   image,
    //   rating,
    //   content,
    //   userId,
    //   productId,
    //   ratingFavors,
    //   userGoal,
    // };
    // console.log("****************************");
    // console.log(review);
    // console.log("****************************");
    if (!editMode)
      dispatch(
        addReview({
          reviewingAs,
          image,
          rating,
          content,
          userId,
          productId,
          ratingFavors,
          userGoal,
          isVerifiedBuyer,
        })
      );
    else {
      dispatch(
        updateReview({
          reviewingAs,
          image,
          rating,
          content,
          ratingFavors,
          userGoal,
          isVerifiedBuyer,
          _id: createdReview._id,
        })
      );
      setEditMode(false);
    }
  };

  const handleSubmit = () => {
    reviewingAs.length >= 4 && isAlphaNumeric(reviewingAs)
      ? setEditMemberName(false)
      : IsUnvaluedName(true);
  };

  const isAlphaNumeric = (str) => {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) && // lower alpha (a-z)
        code !== 32 && // blank space
        code !== 45 && // -
        code !== 95 // _
      ) {
        return false;
      }
    }
    return true;
  };

  return (
    <div class="inline-review active">
      <div class="member-form-wrap">
        {editMemberName ? (
          <div id="membername-edit">
            {isUnvaluedName && (
              <div class="message red">
                Please enter a valid display name (4-20 alphanumeric characters,
                - and _).
              </div>
            )}

            <input
              type="text"
              placeholder="Display Name"
              value={reviewingAs}
              maxlength="20"
              minLength="4"
              onChange={(e) => setReviewingAs(e.target.value)}
            />

            <button
              id="submit-member-name"
              class="btn aloading basic-load"
              data-id="706136"
              data-form-key="K4GSwX1fmv7wOLVT"
              onClick={handleSubmit}
            >
              <span class="init">Done</span>
              {/* <span class="loading">
              <span class="svg-wrap" style={{ lineHeight: "1em" }}>
                <svg width="15" height="15">
                  <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-update-white"></use>
                </svg>
              </span>{" "}
              Changing...
            </span> */}
            </button>
          </div>
        ) : (
          <div id="membername-view">
            <div class="info-wrap">
              <div class="text">Reviewing as:</div>
              <img
                class="member-image lazyloaded"
                data-src="/store/skin/frontend/mnsv4/default/images/user-img.jpg"
                src="/images/user-img.jpg"
                alt=""
              />
              <div class="name change-member-name">{reviewingAs}</div>
              <button
                class="btn change-button change-member-name"
                onClick={() => setEditMemberName(true)}
              >
                change
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        class={`review-form-wrap ${isWriteMoreMode ? "active" : ""} ${
          isPosted && !editMode ? "posted" : ""
        }`}
        id="review-form-14821"
        data-product-id="14821"
        data-form-key="K4GSwX1fmv7wOLVT"
      >
        <div class="notice">
          <div class="notice-text">Your product review is posted!</div>
          <button class="clear-button" onClick={handleClear}>
            clear
          </button>
          <button
            class="edit-button"
            onClick={() => {
              toggleReviewingInput();
              setEditMode(true);
            }}
          >
            edit
          </button>
        </div>
        {
          <div style={{ display: reviewingInputStyle }}>
            <div class="section overall-review open">
              <div class="inner-wrap">
                <div class="text">
                  How many stars would you give The Ripper?
                </div>
                <RatingBox
                  setIsWriteMoreMode={setIsWriteMoreMode}
                  resetRating={resetRating}
                  setResetRating={setResetRating}
                  setMainRating={setMainRating}
                />
              </div>
            </div>
            <LoadingTwo />
            {isWriteMoreMode && (
              <>
                <div class="section flavor-review open">
                  <div class="inner-wrap">
                    <div class="text">Select the flavor(s) you tried.</div>
                    <SelectRating
                      selectedFavors={selectedFavors}
                      setSelectedFavors={setSelectedFavors}
                    />
                  </div>
                </div>
                <div class="section written-review open">
                  <div class="inner-wrap">
                    <div class="text">
                      Tell us what you liked/disliked about The Ripper.
                    </div>
                    <div class="expandingArea text-area active">
                      <pre>
                        <span></span>
                        <br />
                      </pre>
                      <textarea
                        placeholder="Write your review..."
                        // value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                          seTLimitWords(
                            e.target.value.length < -1 * limitWordsDefault
                              ? Number(
                                  limitWordsDefault + e.target.value.length
                                )
                              : Number(e.target.value.length)
                          );
                          setIsPassLimitWords(
                            !(e.target.value.length < -1 * limitWordsDefault)
                          );
                        }}
                      ></textarea>
                    </div>
                    <div class="count">
                      <span
                        class={isPassLimitWords ? "blue" : "gray"}
                        id="char_count"
                      >
                        {limitWords}
                      </span>
                    </div>
                    <button
                      disabled={!isPassLimitWords}
                      class={`submit-review btn ${
                        isPassLimitWords ? "btn-flat-blue" : "btn-flat-disabled"
                      } btn-fancy right`}
                      id="submit_button_14821"
                      data-product-id="14821"
                      onClick={handlePost}
                    >
                      {isPosted ? "Update Review" : "Post Review"}
                    </button>
                    <input
                      type="hidden"
                      id="current-review-id-14821"
                      name="current-review-id"
                      value="254705"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        }
      </div>
    </div>
  );
};
/* -60  + 1 = -59*/
/* -59  + 2 = -57*/
// 1 < -60
