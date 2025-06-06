import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: Number,
        size: String,
      },
    ],

    paymentMethod: {
      type: String,
      enum: ["COD", "Credit Card", "PayPal", "Khalti", "Esewa"],
      required: true,
    },

    totalPrice: { type: Number, required: true },

    orderStatus: {
      type: String,
      enum: [
        "Processing",
        "Shipped",
        "Out for delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Processing",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
