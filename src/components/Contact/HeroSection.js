import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import heroImage from "../../assets/image/c.jpeg";

const HeroSection = () => {
  return (
    <header
      className="h-screen relative flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* Hero Text Animation */}
      <motion.div
        className="z-10 text-center px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider">
          CONTACT US
        </h1>
        <p className="mt-4 text-base md:text-lg font-light tracking-wide text-white">
          Reach out to us for any inquiries, support, or feedback.
        </p>
      </motion.div>

      {/* Decorative Scroll Down Indicator */}
      <Link
        to="contact-form"
        smooth={true}
        duration={1000}
        offset={-50}
        className="absolute bottom-8 z-10 flex items-center justify-center w-12 h-12 border-2 border-white rounded-full cursor-pointer"
        aria-label="Scroll to contact form"
      >
        <motion.div
          className="w-3 h-3 bg-white rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </Link>
    </header>
  );
};

export default HeroSection;
