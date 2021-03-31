import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ["male", "Male", "female", "Female", ""],
    },
    goal: { type: String },
    trainingExperience: { type: String },
    password: { type: String, required: true },
    referralCode: { type: String },
    isNewsLitter: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    image: { type: String, default: "/images/user-login.png" },
    point: { type: Number, default: 0 },
    reviewingAs: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModal = mongoose.model("user", userSchema);
export default UserModal;
