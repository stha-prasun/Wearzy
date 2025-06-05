import React from "react";

const NewsLetter = () => {
  return (
    <div className="hero py-16 px-6">
      <div className="hero-content flex-col lg:flex-row justify-between gap-12 w-full max-w-6xl">
        {/* Left Text Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl font-bold">Subscribe to our Newsletter</h1>
          <p className="py-4 text-base text-neutral-600">
            Get updates about our latest collections, promotions, and styling tips.
            Stay ahead in fashion—delivered right to your inbox.
          </p>
        </div>

        {/* Right Form Content */}
        <div className="card bg-base-100 shadow-xl w-full max-w-md">
          <div className="card-body">
            <label className="label font-semibold">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
            <button className="btn btn-neutral mt-4 w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
