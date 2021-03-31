import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    gender,
    goal,
    trainingExperience,
    isAdmin,
    referralCode,
  } = user;
  return jwt.sign(
    {
      _id,
      firstName,
      lastName,
      email,
      gender,
      goal,
      trainingExperience,
      isAdmin,
      referralCode,
    },
    process.env.JWT_SECRET || "somethingSecret",
    { expiresIn: "30d" }
  );
};

export const generateTokenFP = () => {
  return jwt.sign(
    {
      link: "nurmd",
    },
    process.env.JWT_SECRET || "somethingSecret",
    { expiresIn: "30m" }
  );
};

export const isAuthFP = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);

    jwt.verify(token, process.env.JWT_SECRET || "somethingSecret", (err) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        next();
      }
    });
  }
};
