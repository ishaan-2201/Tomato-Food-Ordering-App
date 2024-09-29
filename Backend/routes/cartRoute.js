import express from "express";
import {
  addToCart,
  removeFromCart,
  getCartData,
} from "../controllers/cartController.js";
import authMiddleWare from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleWare, addToCart);

cartRouter.post("/remove", authMiddleWare, removeFromCart);

cartRouter.post("/get", authMiddleWare, getCartData);

export default cartRouter;
