import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Importing menu and close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to detect the current route

  useEffect(() => {
    // Handle scroll event for navbar styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for mobile menu animations
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: (i) => ({
      opacity: 1,
      x: "0%",
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, x: "-50%", transition: { duration: 0.3 } },
  };

  // Navigation menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

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
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path; // Check if the current route matches
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={item.path}
                  className={`${
                    isActive ? "text-yellow-300" : "text-gray-100"
                  } hover:text-yellow-300`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 text-lg font-bold"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" /> {/* Menu icon */}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-green-900 text-gray-100 flex flex-col items-center justify-center z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-6 text-2xl font-bold text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" /> {/* Close icon */}
            </button>
            <nav className="flex flex-col items-center space-y-6 text-2xl">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i} // Custom index for staggered animations
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    to={item.path}
                    className="hover:text-yellow-300"
                    onClick={() => setIsOpen(false)} // Close menu after clicking
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
