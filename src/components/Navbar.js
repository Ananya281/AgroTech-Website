import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const menuItems = ["Home", "About", "Products", "Services", "Research", "Get Involved", "Contact"];

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
          {menuItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-yellow-300 text-gray-100"
              >
                {item}
              </Link>
            </motion.div>
          ))}
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
              CLOSE
            </button>
            <nav className="flex flex-col items-center space-y-6 text-2xl">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i} // Custom index for staggered animations
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-yellow-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
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
