import { Order } from "../models/orderSchema.js";
import { User } from "../models/userSchema.js";

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
