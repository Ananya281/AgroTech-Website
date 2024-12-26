import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import retailerVideo from "../../assets/video/1.mp4"; // Ensure this path is correct

const RetailerSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress for the component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Adjusted for full viewport coverage
  });

  // Define zoom-in and zoom-out effect
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Trigger zoom-in at 50% and zoom-out at 100%
    [1.2, 1, 1.5] // Starts zoomed in, normal scale at midpoint, zooms out to fill viewport
  );

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: videoScale }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={retailerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h2 className="text-5xl font-bold mb-6">For Retailers</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6">
          Become a part of our growing network of trusted retailers. Our
          products are designed to drive sales and customer satisfaction. Enjoy
          exclusive benefits and support tailored for your business needs.
        </p>
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-lg font-medium rounded-lg transition">
          Join Us
        </button>
      </div>
    </motion.section>
  );
};

export default RetailerSection;
