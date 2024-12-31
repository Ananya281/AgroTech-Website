import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const SolutionsSection = () => {
  const sectionRef = useRef(null);

  // Parallax and zoom-out effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"], // Adjust effect's start and end points
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]); // Parallax movement
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Subtle Zoom-out effect

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-green-50 via-green-100 to-white text-center overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white opacity-80 pointer-events-none"></div>

      {/* Glassy Card Content with Zoom-Out Parallax Effect */}
      <motion.div
        style={{
          y: yTransform,
          scale: scaleTransform,
        }}
        className="relative z-10 max-w-[90%] sm:max-w-4xl md:max-w-5xl mx-auto px-6 sm:px-8 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/30 p-6 sm:p-8 md:p-12 m-10"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-800 mb-6 leading-tight"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Our <span className="text-yellow-500">Agricultural Solutions</span>
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Addressing agricultural challenges with <strong>innovative</strong>{" "}
          and <strong>cost-effective</strong> solutions. We aim to enhance crop
          productivity, minimize waste, and ensure sustainable farming
          practices for a better future.
        </p>
        <button
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-green-300"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Learn More
        </button>
      </motion.div>

      {/* Decorative Floating Elements with Adjusted Sizes */}
      <div className="absolute -top-8 left-8 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-green-300 rounded-full opacity-50 blur-2xl animate-bounce"></div>
      <div className="absolute bottom-0 right-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-green-500 rounded-full opacity-40 blur-xl animate-bounce delay-150"></div>
      <div className="absolute top-1/3 right-1/4 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 bg-green-100 rounded-full opacity-30 blur-lg animate-bounce delay-300"></div>
    </section>
  );
};

export default SolutionsSection;
