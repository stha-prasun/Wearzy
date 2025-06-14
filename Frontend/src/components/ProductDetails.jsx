import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ORDER_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const product = useSelector((store) => store.Product.product);
  const [quantity, setQuantity] = useState(1);
  const [final_quantity, setFinalQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const userId = useSelector((store) => store?.User?.user?._id);

  const handlePlaceOrder = async () => {
    if (!userId) {
      toast.error("Please login before placing order");
    }
    
    const orderPayload = {
      user: userId,
      orderItems: [
        {
          product: product._id,
          quantity: final_quantity || 1,
          size,
        },
      ],
      paymentMethod,
      totalPrice: product.price * quantity,
    };

    try {
      const response = await axios.post(
        `${ORDER_API_ENDPOINT}/create`,
        orderPayload
      );
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <figure className="bg-base-200 rounded-xl overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </figure>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-bold text-primary">
            ${product.price}
          </div>

          {/* Size Selector */}
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Select Size</span>
            </label>
            <select
              className="select select-bordered"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const val = e.target.value;
                setQuantity(val);
                setFinalQuantity(Number(val));
              }}
              className="input input-bordered"
            />
          </div>

          {/* Payment Method */}
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Payment Method</span>
            </label>
            <select
              className="select select-bordered"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Esewa">Esewa</option>
              <option value="Khalti">Khalti</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Place Order Button */}
          <button
            className="btn btn-primary mt-4 w-full md:w-1/2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
