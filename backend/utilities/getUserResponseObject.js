import { generateToken } from "../utils.js";

export const getUserResponseObject = (user) => {
  return {
    _id: user._id,
    firstName: user.firstName,
    email: user.email,
    reviewingAs: user.reviewingAs,
    evaluateHelpfulness: user.evaluateHelpfulness,
    token: generateToken(user),
  };
};
