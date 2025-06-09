import express from "express";
import { addBestSeller, getBestSeller, removeBestSeller } from "../controllers/bestSellerController.js";

const router = express.Router();

router.route("/add").post(addBestSeller);

router.route("/get").get(getBestSeller);

router.route("/remove").delete(removeBestSeller);

export default router;