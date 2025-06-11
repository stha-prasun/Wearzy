import express from "express";
import { createOrder, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();

router.route("/create").post(createOrder);

router.route("/status/update/:id").post(updateOrderStatus);

export default router;