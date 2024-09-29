import express from "express";

import {
  changeOrderStatus,
  listAllOrders,
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleWare, userOrders);
orderRouter.get("/list", listAllOrders);
orderRouter.post("/changestatus", changeOrderStatus);

export default orderRouter;
