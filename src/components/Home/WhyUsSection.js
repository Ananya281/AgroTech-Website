import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import backgroundImage from "../../assets/image/farmer.jpeg"; // Replace with the path to your background image

const WhyUsSection = () => {
  const [showCursor, setShowCursor] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX - 32); // Adjust the offset to center the cursor
    cursorY.set(e.clientY - 32);
  };

  useEffect(() => {
    if (showCursor) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showCursor]);

  return (
    <section
      className="relative h-screen w-full text-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Custom Circular Cursor */}
      {showCursor && (
        <motion.div
          className="fixed w-16 h-16 bg-yellow-300 text-black flex items-center justify-center rounded-full pointer-events-none z-50"
          style={{
            translateX: cursorX,
            translateY: cursorY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          WHY US?
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          WHY FV PLUS AGROTECH INNOVATION?
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto my-4"></div>
        <p className="text-lg md:text-2xl text-gray-200">OUR WORKS AND OBJECTIVES</p>
      </div>
    </section>
  );
};

export default WhyUsSection;
