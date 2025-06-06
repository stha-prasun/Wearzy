import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 flex flex-col sm:flex-row justify-between">
      {/* Brand & Description */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Wearzy</h2>
        <p className="max-w-xs text-sm">
          Timeless fashion. Everyday comfort. Discover your style with Wearzy —
          where modern meets minimal.
        </p>
      </div>

      {/* Shop Section */}
      <nav>
        <h6 className="footer-title">Shop</h6>
        <a className="link link-hover">Men</a>
        <a className="link link-hover">Women</a>
        <a className="link link-hover">Best Sellers</a>
        <a className="link link-hover">New Arrivals</a>
      </nav>

      {/* Company Section */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Blog</a>
      </nav>

      {/* Policies Section */}
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Return Policy</a>
        <a className="link link-hover">Exchange Policy</a>
        <a className="link link-hover">Customer Support</a>
        <a className="link link-hover">Terms & Conditions</a>
      </nav>
    </footer>
  );
};

export default Footer;
