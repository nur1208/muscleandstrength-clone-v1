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
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// process global
mongoose.connect(
  process.env.MONGO || "mongodb://localhost/muscleandstrength-v1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("server at http://localhost:" + port);
});
