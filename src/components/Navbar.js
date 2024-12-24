import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">FV Plus Agrotech</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/research" className="hover:text-gray-300">Research</Link>
            <Link to="/get-involved" className="hover:text-gray-300">Get Involved</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
