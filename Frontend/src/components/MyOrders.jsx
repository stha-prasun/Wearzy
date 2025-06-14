import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const statusColor = {
  Processing: "badge-primary",
  Shipped: "badge-info",
  Delivered: "badge-success",
  Cancelled: "badge-error",
  "Out for delivery": "badge-accent",
};

const MyOrders = () => {
  const user = useSelector((store) => store.User.user);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">
            My Orders
          </h1>

          {user?.orders?.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              You haven't placed any orders yet.
            </div>
          ) : (
            <div className="space-y-6">
              {user?.orders?.map((order) => (
                <div
                  key={order?._id}
                  className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
                >
                  {/* Top Section: ID + Date + Status */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-lg font-semibold">
                        Order ID: {order._id.toUpperCase()}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Date: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Payment: {order.paymentMethod}
                      </p>
                    </div>
                    <span className={`badge ${statusColor[order.orderStatus]}`}>
                      {order.orderStatus}
                    </span>
                  </div>

                  <div className="divider my-2" />

                  {/* Order Items */}
                  <div className="space-y-2">
                    {order.orderItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm text-gray-700"
                      >
                        <span>
                          Product ID: {item.product} <br />
                          Quantity: {item.quantity} | Size: {item.size}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="mt-4 flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>${order.totalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
