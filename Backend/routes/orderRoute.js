import express from "express";
import { createOrder, getAllOrders, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();

router.route("/create").post(createOrder);

router.route("/status/update/:id").post(updateOrderStatus);

router.route("/get/all").get(getAllOrders);

export default router;