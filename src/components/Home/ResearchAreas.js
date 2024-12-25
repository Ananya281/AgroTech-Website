import React, { useState } from "react";
import { motion } from "framer-motion";
import guavaImage from "../../assets/image/guava.png"; // Replace with actual file path
import guavaVideo from "../../assets/video/2.mp4"; // Replace with actual file path
import irisImage from "../../assets/image/Iris.png"; // Replace with actual file path
import irisVideo from "../../assets/video/3.mp4"; // Replace with actual file path

const ResearchAreas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (e) => {
    setCursorStyle({
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  };

  return (
    <section
      className="bg-white text-black relative flex flex-col items-center justify-center px-12 py-12 mx-5 my-5"
      onMouseMove={showCursor ? handleMouseMove : null}
    >
      <motion.h2
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Research Areas
      </motion.h2>

      {/* Cards Section */}
      <div className="space-y-16">
        {/* Card 1 (Guava) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side Description */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Guava Probi
            </motion.h3>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Promotes gut-healthy microbiome and supports overall well-being.
              With all the natural benefits of whole guava, it promotes
              gut-healthy microbiomes, optimizes digestion and physiological
              balance, and contributes to improved overall health and
              well-being.
            </motion.p>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            className="relative w-full md:w-3/4 h-[500px] rounded-lg overflow-hidden group cursor-pointer"
            onMouseEnter={() => {
              setHoveredCard("guava");
              setShowCursor(true);
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setShowCursor(false);
            }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {hoveredCard === "guava" ? (
              <video
                src={guavaVideo}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              ></video>
            ) : (
              <img
                src={guavaImage}
                alt="Guava Probi"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 flex items-center justify-center transition">
              <h4 className="text-white text-xl font-bold">VIEW CASE STUDY</h4>
            </div>
          </motion.div>
        </div>

        {/* Card 2 (IRIS) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Right Side Description */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              IRIS
            </motion.h3>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              IRIS is a cutting-edge IoT device offering solutions that revamp
              fruit management from farm to table. This holistic system is
              designed to cater to each phase of the fruit supply chain,
              ensuring optimal fruit quality from producer to customer.
            </motion.p>
          </motion.div>

          {/* Left Side Card */}
          <motion.div
            className="relative w-full md:w-3/4 h-[500px] rounded-lg overflow-hidden group cursor-pointer"
            onMouseEnter={() => {
              setHoveredCard("iris");
              setShowCursor(true);
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setShowCursor(false);
            }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {hoveredCard === "iris" ? (
              <video
                src={irisVideo}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              ></video>
            ) : (
              <img
                src={irisImage}
                alt="IRIS"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 flex items-center justify-center transition">
              <h4 className="text-white text-xl font-bold">VIEW CASE STUDY</h4>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Circular Cursor */}
      {showCursor && (
        <motion.div
          className="fixed w-40 h-40 bg-yellow-300 text-black flex flex-col items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
          style={{
            left: cursorStyle.left,
            top: cursorStyle.top,
          }}
          animate={{
            scale: hoveredCard ? 1.2 : 1,
            opacity: hoveredCard ? 0.8 : 1,
            rotate: hoveredCard ? [0, 20, 0] : 0, // Adding a bounce effect
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <span className="font-semibold text-md mt-10 text-center">
            VIEW CASE STUDY
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8 h-8 mt-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l7 7h-4v6h-6v-6h-4l7-7z" />
          </svg>
        </motion.div>
      )}
    </section>
  );
};

export default ResearchAreas;
