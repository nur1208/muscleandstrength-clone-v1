import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";
import { items } from "../../data/groupOne";
import { items2 } from "../../data/groupTwo";
import { items3 } from "../../data/Nutrition";
import {
  Loader,
  LoaderBlock,
} from "../../styledComponents/searchScreen/catalogListingSC";
import { CustomSelect } from "./CustomSelect";
import { Group } from "./Group";

export const ProductAside = () => {
  // useEffect(() => {
  //   addClass(0);
  // }, []);

  const dispatch = useDispatch(null);

  const [favors, setFavors] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const history = useHistory();

  const productOne = useSelector((state) => state.productOne);
  const {
    product: {
      buyingOption,
      directions,
      warning,
      nutritionInfo,
      _id: productId,
    },
  } = productOne;

  const productV2Store = useSelector(
    (state) => state.productV2Store
  );

  const {
    product: { supProducts },
    loading: loadingProductV2,
  } = productV2Store;

  const cart = useSelector((state) => state.cart);
  const { loading, success } = cart;

  const userSingIn = useSelector((state) => state.userSingIn);

  // const product = {
  //   name: "JNX Sports The Ripper",
  //   image:
  //     "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/t/h/the-ripper-blood-orange-30-serve_2.jpg",
  //   brand: "JNX Sports",
  //   description: "The Ultimate Fast Acting, Full Strength Fat Burner!*",
  //   features: [
  //     "Fast acting formula*",
  //     "Full strength fat-burner*",
  //     "Supports appetite control*",
  //     "9 intense great tasting flavors",
  //   ],

  //   rating: 94,
  //   numReviews: 737,
  //   numReviewsVerified: 727,
  //   graphData: [
  //     { start: 5, percentage: 79 },
  //     { start: 4, percentage: 16 },
  //     { start: 3, percentage: 4 },
  //     { start: 2, percentage: 0 },
  //     { start: 1, percentage: 1 },
  //   ],
  //   topRated: [
  //     { percentage: 98, name: "Dark Grape (4.9/5 )" },
  //     { percentage: 97, name: "Blue Raspberry (4.9/5 )" },
  //     { percentage: 96, name: "Fruit Punch (4.8/5 )" },
  //     { percentage: 95, name: "Raspberry Lemonade (4.8/5 )" },
  //     { percentage: 95, name: "Blood Orange (4.8/5 )" },
  //     { percentage: 95, name: "Sour Strawberry (4.8/5  )" },
  //     { percentage: 94, name: "Razor Lime (4.7/5 )" },
  //     { percentage: 94, name: "Watermelon Candy (4.7/5 )" },
  //     { percentage: 93, name: "Pineapple Shred (4.7/5 )" },
  //     { percentage: 91, name: "Pink Mango Slice (4.6/5 )" },
  //     { percentage: 91, name: "Cherry Limeade (4.6/5 )" },
  //     { percentage: 86, name: "Pixie Sticks (4.3/5 )" },
  //   ],

  //   price: 27.11,
  //   category: "Fat Burner",
  //   ingredient:
  //     "Citric Acid, Malic Acid, Calcium Silicate, Silicon Dioxide, Natural and Artificial Flavors, Beet Juice (color), Sucralose, Acesulfame Potassium",
  //   directions:
  //     "Begin drinking (1) serving (1 scoop) mixed with 6-8 ounces (180-250mls) of cold water on an empty stomach 15-30 minutes before breakfast for the first two (2) days to assess tolerance. an additional 1 scoop may be taken 5-6 hours later or as directed by a qualified healthcare practitioner. For best results, use for 60 days in combination with diet and exercise. Do not exceed 2 servings in a 24 hour period.",
  //   warning:
  //     "Always assess your tolerance with a single scoop. This product is only intended to be consumed by healthy adults 18 years of age or older. Not for use by those with pre-existing medical conditions or those taking any medications, young children under the age of 18, pregnant or lactating women, or individuals sensitive to caffeine or beta alanine. Discontinue use and consult your health care professional if you experience any adverse reaction to this product. Do not consume with caffeine, alcohol, or stimulants from other sources. To avoid sleeplessness do not consume within 4 hours of bedtime. You may experience harmless short term skin tingles. Store in a cool, dry place. KEEP OUT OF REACH OF CHILDREN.",
  //   extraInfo: `<p style={{ marginBottom: 0 }}>
  //           <img
  //             className="full-width-mobile lazyloaded"
  //             data-src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Products/R/the-ripper.jpg"
  //             alt=""
  //             src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Products/R/the-ripper.jpg"
  //           />
  //         </p>
  //         <h3>Get Ripped With The Ripper!</h3>
  //         <p>
  //           With more than a million bottles sold worldwide, The Ripper!® is one
  //           of the most effective and fast acting fat burners on the market
  //           today.*
  //         </p>
  //         <p>
  //           A full strength, fast acting formula, The Ripper! contain a
  //           concentrated blend of ingredients specifically designed to burn fat
  //           and help control food cravings.*
  //         </p>
  //         <p>
  //           Get clean, intense energy with enhanced mental focus throughout the
  //           day. All without the jitters often associated with other weight loss
  //           products.*
  //         </p>
  //         <p>
  //           The Ripper! kicks like a bull and hits like a bolt of lightning.
  //           Experience The Ripper! This is fat burning you can feel!*
  //         </p>
  //         <ul className="bold">
  //           <li>Full Strength Fat Burner*</li>
  //           <li>Fast Acting*</li>
  //           <li>Great Taste*</li>
  //           <li>All Day Energy*</li>
  //           <li>Appetite Control*</li>
  //         </ul>
  //         <p>
  //           <img
  //             src="https://cdn.muscleandstrength.com/store/media/wysiwyg/Brands/J/The_Ripper_Variety_Pack.jpg"
  //             alt=""
  //           />
  //         </p>`,
  //   buyingOption: [
  //     {
  //       price: 0.0,
  //       point: 0.0,
  //       title: "1 Serving Sample",
  //       servingInfo: "1 Servings | €0.00 Per Serving",
  //       items: items,
  //     },
  //     {
  //       price: 16.14,
  //       point: 31.99,
  //       beforeDiscount: 27.11,
  //       title: "30 Servings",
  //       servingInfo: "30 Servings | €0.50 Per Serving",
  //       deal: {
  //         title: "30% DISCOUNT IN CART ",
  //         description:
  //           " Take an EXTRA 30% off JNX Sports The Ripper! No coupon needed, discount applied in cart.",
  //         image:
  //           "https://cdn.muscleandstrength.com/store/media/mnsresized/catalog/product/t/h/20773a/98/98/the-ripper-blue-raspberry-30-serve.jpg",
  //       },
  //       items: items2,
  //     },
  //   ],
  //   recommended: [
  //     {
  //       link: "https://www.muscleandstrength.com/store/cobra-labs-curse.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/t/h/the-curse-bottle-render-fruit-punch_2_1.jpg",
  //       name: "The Curse",
  //       rating: 92,
  //       price: 24.13,
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/nitro-tech-100-whey-gold.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/n/i/nitro_whey_5.5lb_drc_1.jpg",
  //       name: "Nitro-Tech 100% Whey Gold",
  //       rating: 94,
  //       priceString: "€27.95 - €72.01",
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/acuts.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/a/m/aminocuts-goji-berry.jpg",
  //       name: "                             AminoCuts                         ",
  //       rating: 96,
  //       price: 21.17,
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/primeval-labs-apeshit.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/u/n/untamed-slemonade_1024x1024_2x_1.jpg",
  //       name: "APESH*T UNTAMED",
  //       rating: 92,
  //       price: 25.41,
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/primeval-labs-apeshit-cutz.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/u/n/untamed-cutz-palmer_1024x1024_2x_1.jpg",
  //       name: "APESH*T Cutz",
  //       rating: 93,
  //       price: 25.41,
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/nitro-tech-performance.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/m/t/mt_performance_series_nitro_tech_toasted_s_mores_4lbs-sm_1.jpg",
  //       name: "Nitro-Tech",
  //       rating: 93,
  //       priceString: "€27.95 - €67.78",
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/all-9-amino.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/k/e/keto_bomb_-_18_servs_-_french_vanilla_latte-new_1.jpg",
  //       name: "                             Keto Bomb                         ",
  //       rating: 90,
  //       price: 24.13,
  //     },
  //     {
  //       link: "https://www.muscleandstrength.com/store/cobra-labs-curse.html",
  //       image:
  //         "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/150x/9df78eab33525d08d6e5fb8d27136e95/t/h/the-curse-bottle-render-fruit-punch_2_1.jpg",
  //       name: "ALL 9 AMINO",
  //       rating: 91,
  //       price: 30.66,
  //     },
  //   ],
  //   usersReview: [
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "67881",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Razor Lime" }],
  //       userName: "krista k",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Tastes great, nice energy boost. I read about people complaining about the Lime flavor (?) It's great. Remember the lime popsicles as a kid? That's the taste. Then again, why whine about flavor when it's a supplement? Down it and get on with your workout! I didn't have any side effects with this, no jitters or anything, and I drink a LOT of coffee throughout the day. On some days I'll do the recommended dosage, some days I use less. Experiment with it. Anyone looking to this (or any supplement) thinking it's going to magically make you lose weight? Sorry. You need to get off your butt, workout, and stop eating garbage. The Ripper is a tool, like other supplements that give a boost to your workouts and rev up your metabolism a bit. Hit the workout with intensity and focus, cut out empty carbs and yes, supplements will work for you. I'd buy this again.",
  //       helpfulData: "4 of 4 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "49293",
  //       rating: 60,
  //       ratedList: [{ percentage: 40, name: "Cherry Limeade" }],
  //       userName: "Ahmed E",
  //       badges: ["verified buyer"],
  //       content:
  //         "about to finish my first one , I think it's useless , diet is the key",
  //       helpfulData: "4 of 4 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "49723",
  //       rating: 100,
  //       ratedList: [
  //         { percentage: 40, name: "Pineapple Shred" },
  //         { percentage: 100, name: "Raspberry Lemonade" },
  //       ],
  //       userName: "Andrea C",
  //       badges: ["verified buyer"],
  //       content:
  //         "Great product. Use it in the mornings and then as a pre-workout.",
  //       helpfulData: "3 of 3 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //     {
  //       userId: "27713",
  //       rating: 60,
  //       ratedList: [{ percentage: 80, name: "Pink Mango Slice" }],
  //       userName: "Robert",
  //       badges: ["Build Muscle", "verified buyer"],
  //       content:
  //         "Not great taste but non of theses supplements really do. No real boost in energy but did notice a curb in apptite. Overall I maintained about normal progress and didn't see a substantial boost from product use. Maybe good for a beginner but not for a long term fat burner user.",
  //       helpfulData: "9 of 10 found this helpful",
  //       yearsAgo: 4,
  //     },
  //   ],
  //   nutritionInfo: { items: items3 },
  // };

  const handleAddToCart = (e) => {
    e.preventDefault();
    // console.log(userSingIn);
    const userId =
      userSingIn.userInfo && userSingIn.userInfo._id;
    // console.log({ userId, productId });

    if (favors) {
      const productType = "30 Servings " + favors.title;
      const quantity = favors.quantity;
      console.log({ productType, quantity: favors.quantity });
      dispatch(
        addToCart(userId, productId, quantity, productType)
      );
      setIsAdded(true);
      setIsAddBtnClicked(false);
    } else {
      setIsAddBtnClicked(true);
    }

    // dispatch(addProduct(product));
  };
  const [nurtIndex, setnurtIndex] = useState(0);

  const [nurt, setNurt] = useState(
    nutritionInfo.items.length > 0
      ? nutritionInfo.items[nurtIndex].nutrition
      : null
  );
  const [showAllNurt, setShowAllNurt] = useState(false);

  const getSelectIndex = (index) => {
    setnurtIndex(index);
  };

  useEffect(() => {
    nurt && setNurt(nutritionInfo.items[nurtIndex].nutrition);
  }, [nurtIndex, nutritionInfo]);

  useEffect(() => {
    // if cartItem add successfully to the cart
    if (success && isAdded) {
      // setIsAdded(false);
      history.push("/store/cart");
    }
  }, [history, success]);

  return (
    <div className="aside aside-after">
      <div className="product-shop">
        <div className="shop-wrap">
          <div className="section-title">Buying Options</div>
          <form id="product_addtocart_form">
            <div className="section-inner-wrap">
              <div className="group-wrap">
                {buyingOption &&
                  buyingOption.map((option, index) => (
                    <Group
                      key={index}
                      beforeDiscount={option.beforeDiscount}
                      price={option.price}
                      point={option.point}
                      title={option.title}
                      servingInfo={option.servingINfo}
                      deal={option.deal && option.deal.title}
                      // favors={option.favors}
                      items={option.items}
                      setFavors={
                        option.title === "30 Servings" &&
                        setFavors
                      }
                      isAddBtnClicked={
                        option.title === "30 Servings" &&
                        isAddBtnClicked
                      }
                    />
                  ))}

                {/* {supProducts &&
                  supProducts.map((option, index) => {
                    // console.log({ deal: option.deals, index });
                    return (
                      <Group
                        key={index}
                        beforeDiscount={option.beforeDiscount}
                        price={option.price}
                        // point={option.point}
                        point={option.pointPerUnit}
                        servings={option.servings}
                        perServingPrice={option.perServingPrice}
                        title={option.size}
                        // servingInfo={option.servingINfo}
                        // deal={option.deal && option.deal.title}
                        // favors={option.favors}
                        items={items}
                        deal={
                          option.deals[0] && option.deals[0].type
                        }
                        setFavors={
                          option.title === "30 Servings" &&
                          setFavors
                        }
                      />
                    );
                  })} */}
                {/* <Group
                  price={0.0}
                  point={0.0}
                  title={"1 Serving Sample"}
                  servingInfo={"1 Servings | €0.00 Per Serving"}
                  favors={favors}
                  items={items}
                />
                <Group
                  beforeDiscount={27.11}
                  price={16.14}
                  point={31.99}
                  title={"30 Servings"}
                  servingInfo={"30 Servings | €0.50 Per Serving"}
                  deal={"30% DISCOUNT IN CART "}
                  favors={favors2}
                  items={items2}
                /> */}
              </div>
            </div>
            <div className="section-separator"></div>
            <div className="section-inner-wrap add-to-cart-wrap">
              <div className="add-to-cart">
                <div>
                  <button
                    className="btn btn-lg btn-submit"
                    // onclick="productAddToCartForm.submit(this, event); return false;"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                    <LoaderBlock
                      id="LoaderBlock"
                      isLoading={loading}
                    >
                      <Loader id="Loader" />
                    </LoaderBlock>
                  </button>
                </div>
              </div>
            </div>
            <div className="section-inner-wrap reward-points-section">
              <div className="reward-points-wrap">
                <a
                  href="/Reward"
                  data-featherlight="#features-list-rewards"
                  data-featherlight-variant="fancy"
                  className="points-label"
                >
                  Reward Points Earned{" "}
                  {/* <svg
                    className="svg-icon"
                    style="width: 1.3em; height: 1.3em; margin-bottom: -.3em;"
                  ></svg> */}
                  <AiOutlineQuestionCircle
                    className="svg-icon"
                    style={{
                      width: "1.3em",
                      height: "1.3em",
                      marginBottom: "-.3em",
                    }}
                  />
                </a>
                <div className="points-earned">
                  <span className="points">0</span> Points
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="product-aside"></div>
      {nurt && (
        <div
          className={`product-nutrition ${
            showAllNurt ? "show-all" : ""
          }`}
        >
          <div className="section-title">Nutrition Info</div>
          <div className="section-inner-wrap">
            <div className="panelSelector">
              <form
                name="nutrinfo-selector"
                id="nutrinfo-selector"
              >
                <CustomSelect
                  items={nutritionInfo && nutritionInfo.items}
                  favors={nutritionInfo && nutritionInfo.favors}
                  maxH={170}
                  getSelectIndex={getSelectIndex}
                />
              </form>
            </div>
            <div className="panel-wrap">
              <div className="show-more-mask"></div>
              <div className="nutrition-info-inner">
                <div
                  className="nutrition-panel"
                  id="nutrition-info-samp0282"
                >
                  <div className="nutrition-panel-inner">
                    <h4>{items3[nurtIndex].title}</h4>
                    <div className="serving thickline">
                      Serving Size: {nurt.ServingSize}
                      <br />
                      Servings Per Container:{" "}
                      {nurt.ServingsPreContainer}
                    </div>
                    <div id="nutrition-info-table">
                      <div className="item thinline">
                        <div className="col-1 ">
                          Amount Per Serving
                        </div>
                        <div className="col-2">Amt</div>
                        <div className="col-3">%DV</div>
                      </div>
                      <div className="row">
                        {nurt &&
                          nurt.info.map((item, index) =>
                            item.isTop ? (
                              <div
                                className="thinline-top"
                                key={index}
                              >
                                <div className={item.cssStyle}>
                                  <div className="col-1">
                                    {item.isIndent ? (
                                      <span className="indent">
                                        item.name
                                      </span>
                                    ) : (
                                      item.name
                                    )}
                                  </div>
                                  <div className="col-2">
                                    {item.Amt}
                                  </div>
                                  <div className="col-3">
                                    {item.DV}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className={item.cssStyle}
                                key={index}
                              >
                                <div className="col-1">
                                  {item.isIndent ? (
                                    <span className="indent">
                                      item.name
                                    </span>
                                  ) : (
                                    item.name
                                  )}
                                </div>
                                <div className="col-2">
                                  {item.Amt}
                                </div>
                                <div className="col-3">
                                  {item.DV}
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                    <div className="ingredients-heading">
                      Ingredients
                    </div>
                    <div className="ingredients">
                      Citric Acid, Malic Acid, Calcium Silicate,
                      Silicon Dioxide, Natural and Artificial
                      Flavors, Beet Juice (color), Sucralose,
                      Acesulfame Potassium
                    </div>
                    <span className="item-directions-note hide">
                      <p>{directions}</p>
                    </span>
                    <span className="item-warning-note hide">
                      <p>{warning}</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="directions-warning">
                <div id="directions">
                  <div className="title">Directions</div>
                  <div
                    id="directions-note"
                    className="font-s-small"
                  >
                    <p>{directions}</p>
                  </div>
                </div>
                <div id="warnings">
                  <div className="title">Warnings</div>
                  <div
                    id="warning-note"
                    className="font-s-small"
                  >
                    <p>{warning}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="expand-wrap">
              {!showAllNurt && (
                <div
                  className="expand-btn btn-blue btn btn-sm"
                  onClick={() => setShowAllNurt(true)}
                >
                  Expand Info
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
