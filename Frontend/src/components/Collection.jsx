import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaSearch } from "react-icons/fa";
import useGetProducts from "../hooks/useGetProducts";
import { useSelector } from "react-redux";
import Product from "./Product";

const Collection = () => {
  const [filters, setFilters] = useState({
    category: "All",
    sort: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  useGetProducts();

  const products = useSelector((store) => store.Products.products);

  return (
    <>
      <Navbar />
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="flex items-center border border-neutral-300 rounded-full shadow-sm overflow-hidden px-4 py-2 bg-white">
          <FaSearch className="text-neutral-500 mr-3" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full outline-none bg-transparent text-neutral-800 placeholder-neutral-400"
          />
        </div>
      </div>
      <div className="px-6 md:px-12 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-neutral-800">
          Explore Our Collection
        </h1>

        {/* Filter Panel */}
        <div className="bg-base-100 shadow-lg rounded-2xl p-6 mb-10 border border-neutral-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-medium text-neutral-700">Category:</span>
              {["All", "Men", "Women", "Unisex"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filters.category === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-3">
              <label className="font-medium text-neutral-700 w-[9vw]">
                Sort by:
              </label>
              <select
                name="sort"
                value={filters.sort}
                onChange={handleChange}
                className="select select-bordered select-sm"
              >
                <option value="">Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection;
