import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_API_ENDPOINT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/productDetails";
import axios from "axios";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (id) => {
    try {
      const res = await axios.get(`${PRODUCT_API_ENDPOINT}/getproduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setProduct(res.data.product));
        navigate(`/product/details/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-64 w-full overflow-hidden">
        <img
          src={product?.image}
          alt={product?.name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p className="text-lg font-semibold text-neutral-700">
          ${product?.price}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              handleClick(product?._id);
            }}
            className="btn btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
