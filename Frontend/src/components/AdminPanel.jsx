import { FaStar, FaClipboardList } from "react-icons/fa";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import useGetOrders from "../hooks/useGetOrders";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BESTSELLER_API_ENDPOINT } from "../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";
import useGetProducts from "../hooks/useGetProducts";
import usegetBestSeller from "../hooks/usegetBestSeller";

const AdminPanel = () => {
  useGetOrders();

  const handleAddBestSeller = async (id) => {
    try {
      const response = await axios.post(
        `${BESTSELLER_API_ENDPOINT}/add`,
        { id },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`${BESTSELLER_API_ENDPOINT}/remove`, {
        data: { id },
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const navigate = useNavigate();
  useGetProducts();

  const bestSellers = useSelector((store) => store?.bestSellers?.bestSeller);
  const products = useSelector((store) => store?.Products?.products);
  const user = useSelector((store) => store.User.user);
  const orders = useSelector((store) => store.Orders.orders);

  useEffect(() => {
    if (!user || user?.role != "admin") {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
          <h1 className="text-2xl font-bold text-indigo-600 mb-8">
            Wearzy Admin
          </h1>
          <nav className="space-y-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <FaStar /> <span>Manage Best Sellers</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <FaClipboardList /> <span>Manage Orders</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-10">
          {/* Best Sellers Management */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Best Sellers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {bestSellers.map((item) => (
                <div
                  key={item?.product?._id}
                  className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
                >
                  <img
                    src={item?.product?.image}
                    alt="Product"
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800">
                    {item?.product?.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    ${item?.product?.price}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleRemove(item?._id);
                      }}
                      className="btn btn-sm btn-outline btn-error"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((item) => (
                <div
                  key={item?._id}
                  className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
                >
                  <img
                    src={item?.image}
                    alt="Product"
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800">{item?.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">${item?.price}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleAddBestSeller(item?._id);
                      }}
                      className="btn btn-sm btn-success"
                    >
                      Add to Best Seller
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Orders Management */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Manage Orders
            </h2>
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
              <table className="table w-full">
                <thead className="bg-gray-100 text-sm text-gray-600">
                  <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {orders.map((item) => (
                    <tr key={item?._id} className="hover:bg-gray-50">
                      <td>{item?._id}</td>
                      <td>{item?.user}</td>
                      <td>${item?.totalPrice}</td>
                      <td>
                        <span className="badge badge-info">
                          {item?.orderStatus}
                        </span>
                      </td>
                      <td>{item?.paymentMethod}</td>
                      <td>
                        <div className="flex items-center gap-3 p-2">
                          <select className="select select-sm select-bordered">
                            <option>Processing</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                          </select>
                          <button className="btn btn-outline btn-sm btn-primary">
                            Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
