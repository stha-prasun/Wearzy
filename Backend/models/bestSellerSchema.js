import mongoose from "mongoose";

const bestSellerSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

export const BestSeller = mongoose.model("BestSeller", bestSellerSchema);
