import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/auth/login";
import Signup from "./components/auth/Signup";
import MyOrders from "./components/MyOrders";
import AdminPanel from "./components/AdminPanel";
import OrderDetails from "./components/OrderDetails";
import About from "./components/About";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/collection",
      element: <Collection />,
    },
    {
      path: "/product/details/:id",
      element: <ProductDetails />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/orders",
      element: <MyOrders />,
    },
    {
      path: "/admin",
      element: <AdminPanel />,
    },
    {
      path: "/admin/order/detail/:id",
      element: <OrderDetails />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
