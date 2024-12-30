import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'; // Import Link from react-scroll
import heroImage from "../../assets/image/c.jpeg"; // Adjust the path as per your folder structure

const HeroSection = () => {
  return (
    <header
      className="h-screen relative flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-100"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Text Animation */}
      <motion.div
        className="z-10 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-6xl font-extrabold tracking-wider">
          CONTACT US
        </h1>
        <p className="mt-4 text-lg font-light tracking-wide text-white">
          Reach out to us for any inquiries, support, or feedback.
        </p>
      </motion.div>

      {/* Decorative Scroll Down Indicator */}
      <Link
        to="contact-form" // Scroll to the section with the id "contact-form"
        smooth={true}
        duration={1000} // Increased duration for a smoother, slower scroll
        offset={-50} // Adjust offset if you have a fixed navigation bar
        className="absolute bottom-8 z-10 flex items-center justify-center w-10 h-10 border-2 border-white rounded-full cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </Link>
    </header>
  );
};

export default HeroSection;
