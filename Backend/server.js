import express from "express";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectToDB();

//api endpoints
app.use("/api/food", foodRouter);

app.use("/api/user", userRouter);

app.use("/api/cart", cartRouter);

app.use("/api/order", orderRouter);

app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello from home page!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
