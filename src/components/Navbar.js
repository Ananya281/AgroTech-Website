import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Define isOpen and setIsOpen for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-700 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-yellow-300">FV Plus</div>
          <div className="italic text-gray-200 text-sm">Agrotech</div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-yellow-300 text-gray-100">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 text-gray-100">
            About
          </Link>
          <Link to="/products" className="hover:text-yellow-300 text-gray-100">
            Products
          </Link>
          <Link to="/services" className="hover:text-yellow-300 text-gray-100">
            Services
          </Link>
          <Link to="/research" className="hover:text-yellow-300 text-gray-100">
            Research
          </Link>
          <Link
            to="/get-involved"
            className="hover:text-yellow-300 text-gray-100"
          >
            Get Involved
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 text-gray-100">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 text-lg font-bold"
          onClick={() => setIsOpen(true)}
        >
          MENU
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-green-900 text-gray-100 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-6 text-2xl font-bold text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            CLOSE
          </button>
          <nav className="flex flex-col items-center space-y-6 text-2xl">
            <Link
              to="/"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/services"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/research"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              to="/get-involved"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
