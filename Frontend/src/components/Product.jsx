import React from "react";

const Product = ({ product }) => {
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
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
