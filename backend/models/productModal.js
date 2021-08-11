import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "brand",
    },
    // brand: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], index: true, required: true },

    price: { type: Number, required: true },
    qty: { type: Number, required: true },

    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    numReviewsVerified: { type: Number },
    graphData: [
      { start: { type: Number }, percentage: { type: Number } },
    ],
    topRated: [
      { percentage: { type: Number }, name: { type: String } },
    ],

    category: { type: String, required: true },
    ingredient: { type: String },
    type: { type: String },
    directions: { type: String },
    warning: { type: String },
    extraInfo: { type: String },
    deals: [
      {
        type: mongoose.Types.ObjectId,
        ref: "deal",
      },
    ],
    buyingOption: [
      {
        price: { type: Number, required: true },
        point: { type: Number, required: true },
        title: { type: String, required: true },
        servingInfo: { type: String, required: true },
        beforeDiscount: { type: Number },
        deal: {
          title: { type: String },
          description: { type: String },
          image: { type: String },
        },

        items: [
          {
            title: { type: String, required: true },
            isSelected: { type: Boolean, default: false },
            isDisabled: { type: Boolean, default: false },
            value: { type: String },
          },
        ],
      },
    ],
    recommended: [
      {
        link: { type: String },
        image: { type: String },
        name: { type: String },
        rating: { type: Number },
        price: { type: Number },
      },
    ],
    usersReview: [
      {
        userId: { type: String },
        rating: { type: Number },
        ratedList: [
          {
            percentage: { type: Number },
            name: { type: String },
          },
        ],
        userName: { type: String },
        badges: { type: [String] },
        content: { type: String },
        helpfulData: { type: String },
        helpful: { type: Number },
        notHelpful: { type: Number },
        yearsAgo: { type: Number },
      },
    ],
    nutritionInfo: {
      items: [
        {
          title: { type: String },
          value: { type: String },
          siSelected: { type: Boolean, default: false },
          nutrition: {
            ServingSize: { type: String },
            ServingsPreContainer: { type: String },
            info: [
              {
                cssStyle: { type: String },
                name: { type: String },
                Amt: { type: String },
                DV: { type: String },
                isHtml: { type: Boolean, default: false },
                isIndent: { type: Boolean, default: false },
                isTop: { type: Boolean, default: false },
              },
            ],
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const buyingOption = new mongoose.Schema({});

const Product = mongoose.model("product", productSchema);
export default Product;
