import { BestSeller } from "../models/bestSellerSchema.js";
import { Product } from "../models/productSchema.js";

export const addBestSeller = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = BestSeller.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const alreadyExists = await BestSeller.findOne({ product: productId });
    if (alreadyExists) {
      return res
        .status(400)
        .json({ message: "Product already marked as best seller" });
    }

    await BestSeller.create({ product: productId });

    res.status(201).json({ success: true, message: "Added to best sellers" });
  } catch (error) {
    console.log(error);
  }
};

export const getBestSeller = async (req, res) => {
  try {
    const bestSellers = await BestSeller.find().populate("product");

    res.status(200).json({ success: true, bestSellers });
  } catch (error) {
    console.log(error);
  }
};

export const removeBestSeller = async (req, res) => {
  try {
    const { id } = req.body;

    const removed = await BestSeller.findByIdAndDelete(id);
    if (!removed) {
      return res.status(404).json({ message: "Best seller not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Removed from best sellers" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to remove best seller", error: error.message });
  }
};
