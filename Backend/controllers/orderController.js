import { Order } from "../models/orderSchema.js";
import { User } from "../models/userSchema.js";
import { Product } from "../models/productSchema.js";

export const createOrder = async (req, res) => {
  try {
    const { user, orderItems, paymentMethod, totalPrice } = req.body;

    if (!user || !orderItems || !paymentMethod || !totalPrice) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }

    const order = await Order.create({
      user,
      orderItems,
      paymentMethod,
      totalPrice,
    });

    const USER = await User.findById(user);

    USER.orders.push(order._id);

    await USER.save();

    res
      .status(201)
      .json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    order.orderStatus = status;
    await order.save();

    res.status(200).json({ success: true, message: "Order status updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id)
      .populate("user", "fullname _id")
      .populate("orderItems.product");

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.log(error);
  }
};
