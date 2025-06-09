import { Product } from "../models/productSchema.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, sizes, image } = req.body;

    if (!name || !description || !price || !image) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    const product = new Product({ name, description, price, sizes, image });
    await product.save();

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
  }
};
