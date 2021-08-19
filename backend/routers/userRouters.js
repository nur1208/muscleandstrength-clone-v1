import express from "express";
import expressAsyncHandler from "express-async-handler";
import Mailgen from "mailgen";
import UserModal from "../models/userModel.js";
import bcrypt from "bcrypt";
import {
  generateToken,
  generateTokenFP,
  isAuth,
} from "../utils.js";
import { sendEmail } from "../emailer.js";
import { EMAIL } from "../config/index.js";
import { COOKIE_NAME } from "../utilities/constants.js";
import { getUserResponseObject } from "../utilities/getUserResponseObject.js";
const userRouter = express.Router();

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      gender,
      goal,
      trainingExperience,
      password,
      referralCode,
      isNewsLitter,
    } = req.body;

    const user = new UserModal({
      firstName,
      lastName,
      email,
      gender,
      goal,
      trainingExperience,
      password: bcrypt.hashSync(password, 8),
      referralCode,
      isNewsLitter,
    });
    try {
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        firstName: createdUser.firstName,
        email: createdUser.email,
        token: generateToken(createdUser),
      });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  })
);

userRouter.post(
  "/signIn",
  expressAsyncHandler(async (req, res) => {
    const user = await UserModal.findOne({
      email: req.body.email,
    });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.userId = user._id;

        console.log({ userIdInSignIn: req.session.userId });
        res.send(getUserResponseObject(user));
        return;
      }
    }
    res
      .status(401)
      .send({ message: "Invalid Email or password" });
  })
);

userRouter.post(
  "/findEmail",
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    try {
      const user = await UserModal.findOne({ email });
      res.send({ email: user.email });
    } catch (error) {
      res.status(401).send({ message: "email is not exist" });
    }
  })
);

userRouter.post(
  "/forgetPassword",
  expressAsyncHandler(async (req, res) => {
    if (!req.body)
      return res
        .status(400)
        .send({ message: "No Request Body" });
    if (!req.body.userEmail)
      return res
        .status(400)
        .send({ message: "No Email In Request Body" });

    const { userEmail } = req.body;

    try {
      const user = await UserModal.findOne({
        email: req.body.userEmail,
      });
      const MailGenerator = new Mailgen({
        theme: "default",
        product: {
          // Appears in header & footer of e-mails
          name: "muscleandstrength",
          link: "http://127.0.0.1:3000",
          // Optional product logo
          logo: "https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fcdn.muscleandstrength.com%2Fstore%2Fskin%2Ffrontend%2Fmnsv4%2Fdefault%2Fimages%2Flogo_email.gif&t=1610882023&ymreqid=bf2a1792-b4db-390f-1cc3-61000001ce00&sig=TswtBRSwWTa2cQuTBNu4Fg--~D",
        },
      });
      const name = `${user.firstName} ${user.lastName}`;
      const response = {
        body: {
          name,
          intro:
            "There was recently a request to change the password for your account.",
          action: {
            instructions:
              "If you requested this password change, please reset your password here:",
            button: {
              color: "#3696c2", // Optional action button color
              text: "Reset Password",
              link: "http://localhost:3000/store/customer/account/changeforgotten/",
            },
          },
          outro:
            "If you did not make this request, you can ignore this message and your password will remain the same.",
        },
      };
      const mail = MailGenerator.generate(response);

      const message = {
        from: EMAIL,
        to: userEmail,
        subject: "request to change the password",
        html: mail,
      };
      sendEmail(message);
      res.status(200).send({
        msg: "you should receive an email from us",
        token: generateTokenFP(),
      });
    } catch (err) {
      res.status(404).send({
        message:
          "Invalid Email for reset password request, sorry you gotta try again",
        error: err,
      });
    }

    //
  })
);

userRouter.put(
  "/resetPassword",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await UserModal.updateOne(
        { email: req.body.email },
        {
          $set: {
            password: bcrypt.hashSync(req.body.password, 8),
          },
        }
      );
      res.send({
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        token: generateToken(user),
      });
    } catch (error) {
      res.status(404).send({ message: error });
    }
  })
);

userRouter.get("/isFPTokenValid", isAuth, (req, res) => {
  res.send({ message: "valid token" });
});

userRouter.put(
  "/update",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { _id, update } = req.body; // update is update query. what do u wanna update?
    console.log(req.body);

    const updateUser = await UserModal.findByIdAndUpdate(
      _id,
      update,
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );
    res.send({
      _id: updateUser._id,
      firstName: updateUser.firstName,
      email: updateUser.email,
      reviewingAs: updateUser.reviewingAs,
      evaluateHelpfulness: updateUser.evaluateHelpfulness,
      token: generateToken(updateUser),
    });
  })
);

userRouter.get(
  "/autoLoggingLoggedUser",
  expressAsyncHandler(async (req, res) => {
    // req.session.destroy();
    const userId = req.session.userId;
    if (!userId) {
      res.status(404).send({ message: "user not logged in" });
      return;
    }

    const user = await UserModal.findById(userId);

    res.send(getUserResponseObject(user));

    // res.send({ user });
  })
);

userRouter.post(
  "/logout",
  expressAsyncHandler(async (req, res) => {
    // return new Promise((resolve) =>
    //   req.session.destroy((err) => {
    //     res.clearCookie(COOKIE_NAME);
    //     if (err) {
    //       console.log(err);
    //       resolve(false);
    //       return;
    //     }
    //     resolve(true);
    //   })
    // );

    req.session.destroy();
    res.clearCookie(COOKIE_NAME);

    res.send({ message: "logout successfully" });
  })
);

export default userRouter;
