import React from "react";
import { FaExchangeAlt, FaHeadset, FaUndoAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 text-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Wearzy?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">

        <div className="flex flex-col p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="text-indigo-600 text-4xl mb-4 mx-auto">
            <FaExchangeAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Exchange Policy</h3>
          <p className="text-neutral-600">Exchange your products with ease if they don’t meet your expectations.</p>
        </div>

        <div className="flex flex-col p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="text-indigo-600 text-4xl mb-4 mx-auto">
            <FaUndoAlt />
          </div>
          <h3 className="flex flex-col text-xl font-semibold mb-2">7 Days Return Policy</h3>
          <p className="text-neutral-600">Full refund available if returned within 7 days of purchase.</p>
        </div>

        <div className="flex flex-col p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="text-indigo-600 text-4xl mb-4 mx-auto">
            <FaHeadset />
          </div>
          <h3 className="text-xl font-semibold mb-2">Best Customer Support</h3>
          <p className="text-neutral-600">Our team is always here to help you, anytime you need us.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
