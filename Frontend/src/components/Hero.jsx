import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Hero = () => {

    const bestSellers = useSelector((state) => state?.bestSellers?.bestSeller);
    
  return (
    <div className="font-sans bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] bg-gradient-to-r from-white via-neutral-100 to-white px-6 md:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="./src/assets/hero_img.png"
            className="w-full max-w-xl h-auto max-h-[70vh] rounded-3xl shadow-2xl object-cover"
            alt="Featured clothing"
          />
          <div>
            <h1 className="text-5xl font-bold text-neutral-800">Step Into Style</h1>
            <p className="py-6 max-w-md text-neutral-600">
              Refresh your wardrobe with Wearzy's latest collection. Clean cuts, timeless fits, and comfort that lasts.
            </p>
            <Link to="/collection">
              <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-800">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bestSellers.map((item) => (
            <div
            key={item._id}
              className="card bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <figure className="h-60 overflow-hidden">
                <img
                  src={item?.product?.image}
                  alt={item?.product?.name}
                  className="w-full h-full object-contain"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-semibold">{item?.product?.name}</h3>
                <p className="text-indigo-600 font-medium">{item?.product?.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/product/${item.product?._id}`}>
                    <button className="btn btn-outline btn-sm">View</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
