import express from "express";
import { createProduct, getAllProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

router.route("/create").post(createProduct);

router.route("/getallproducts").get(getAllProducts);

router.route("/getproduct/:id").get(getProductById);

export default router;