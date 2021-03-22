import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routers/productsRouter.js";
import reviewRouter from "./routers/reviewRouter.js";
import userRouter from "./routers/userRouters.js";

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

// app.use(express.static("public"));
app.use("/api/review", reviewRouter);

app.use("/api/products", productsRouter);

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("server at http://localhost:" + port);
});
