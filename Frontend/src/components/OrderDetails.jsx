import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { ORDER_API_ENDPOINT } from "../utils/constants";
import axios from "axios";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const handleCall = async () => {
      try {
        const response = await axios.get(`${ORDER_API_ENDPOINT}/get/${id}`, {
          withCredentials: true,
        });

        if (response?.data?.success) {
          setOrder(response?.data?.order);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleCall();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Order Summary
        </h1>

        {/* Basic Info */}
        <div className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
          <div className="flex justify-between flex-wrap text-gray-800">
            <div>
              <h2 className="font-semibold text-md">Order ID</h2>
              <p>{order?._id}</p>
            </div>
            <div>
              <h2 className="font-semibold text-md">Order Date</h2>
              <p>{new Date(order?.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <h2 className="font-semibold text-md">Status</h2>
              <span className="badge badge-info">{order?.orderStatus}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t mt-4">
            <div>
              <h3 className="font-medium text-gray-800">Customer</h3>
              <p>{order?.user?.fullname}</p>
              <p className="text-sm text-gray-500">{order?.user?._id}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Payment Method</h3>
              <p>{order?.paymentMethod}</p>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ordered Items
          </h2>
          <div className="space-y-4">
            {order?.orderItems?.map((item) => (
              <div
                key={item?.product?._id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex gap-4">
                  <>
                    <img
                      src={item?.product?.image}
                      alt={item?.product?.name}
                      className="w-20 h-20 object-contain rounded"
                    />
                    <div>
                      <h3 className="text-md font-semibold text-gray-800">
                        {item?.product?.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Size: {item?.size} | Quantity: {item?.quantity}
                      </p>
                    </div>
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Total</h2>
          <div className="flex justify-between text-gray-700 text-lg font-medium">
            <span>Total Price</span>
            <span>${order?.totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
