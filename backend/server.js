import express from "express";
import mongoose from "mongoose";
import imageRouter from "./routers/imageRouter.js";
import productsRouter from "./routers/productsRouter.js";
import reviewRouter from "./routers/reviewRouter.js";
import userRouter from "./routers/userRouters.js";
import formData from "express-form-data";
import dotenv from "dotenv";
import cartRouter from "./routers/cartRouter.js";
import brandRouter from "./routers/brandRouter.js";
// --- imports for redis .
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cookieParser from "cookie-parser";
import {
  COOKIE_NAME,
  oneWeek,
  __prod__,
} from "./utilities/constants.js";
const RedisStore = connectRedis(session);
const redis = new Redis();

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// process global
mongoose.connect(
  process.env.MONGO ||
    "mongodb://localhost/muscleandstrength-v1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(
  session({
    name: COOKIE_NAME,
    store: new RedisStore({ client: redis, disableTouch: true }),
    cookie: {
      maxAge: oneWeek, // 1 week, masAge means
      // also expired
      path: "/",
      httpOnly: true, // for security reasons
      sameSite: "lax", //csrf we need to google it.
      secure: __prod__, // cookie only works in production
    },
    saveUninitialized: true,
    secret: "agskfdjasdljdf",
    // resave: false,
  })
);

const port = process.env.PORT || 5000;
app.use(formData.parse());
app.use(express.urlencoded());

// app.use(express.static("public"));

app.use(express.static("backend/view"));

app.use("/api/store/brand", brandRouter);

app.use("/api/store/cart", cartRouter);

app.use("/api/image", imageRouter);

app.use("/api/review", reviewRouter);

app.use("/api/products", productsRouter);

app.use("/api/users", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// This should be the last route else any after it wont work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message:
        "You reached a route that is not defined on this server",
    },
  });
});

app.listen(port, () => {
  console.log("server at http://localhost:" + port);
});
