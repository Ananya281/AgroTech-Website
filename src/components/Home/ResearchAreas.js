import React, { useState } from "react";
import { motion } from "framer-motion";
import guavaImage from "../../assets/image/guava.png"; // Replace with actual file path
import guavaVideo from "../../assets/video/2.mp4"; // Replace with actual file path
import irisImage from "../../assets/image/Iris.png"; // Replace with actual file path
import irisVideo from "../../assets/video/3.mp4"; // Replace with actual file path

const ResearchAreas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-8 bg-white mb-[150px]">
      {/* Small Heading */}
      <h3
        className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        OUR RESEARCH AREAS
      </h3>

      {/* Separator Line */}
      <div className="w-64 h-[1px] bg-green-600 mb-8"></div>

      {/* Main Content */}
      <div className="max-w-6xl">
        {/* Card 1 (Guava Probi) */}
        <div
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredCard("guava")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Description */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Guava Probi
            </h3>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Promotes gut-healthy microbiome and supports overall well-being.
              With all the natural benefits of whole guava, it promotes
              gut-healthy microbiomes, optimizes digestion and physiological
              balance, and contributes to improved overall health and
              well-being.
            </p>
          </motion.div>

          {/* Card with Hover Video Effect */}
          <motion.div
            className="relative w-full md:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            initial={{ opacity: 0.8 }}
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
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 flex items-center justify-center transition-all">
              {/* <h4
                className="text-white text-lg font-bold"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                VIEW DETAILS
              </h4> */}
            </div>
          </motion.div>
        </div>

        {/* Card 2 (IRIS) */}
        <div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredCard("iris")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Description */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              IRIS
            </h3>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              IRIS is a cutting-edge IoT device offering solutions that revamp
              fruit management from farm to table. This holistic system is
              designed to cater to each phase of the fruit supply chain,
              ensuring optimal fruit quality from producer to customer.
            </p>
          </motion.div>

          {/* Card with Hover Video Effect */}
          <motion.div
            className="relative w-full md:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            initial={{ opacity: 0.8 }}
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
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 flex items-center justify-center transition-all">
              {/* <h4
                className="text-white text-lg font-bold"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                VIEW DETAILS
              </h4> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Circular Cursor */}
      {hoveredCard && (
        <motion.div
          className="fixed w-32 h-32 bg-yellow-400 text-black flex items-center justify-center rounded-full pointer-events-none z-50"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: 1.2,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <span
            className="font-bold text-sm text-center"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            VIEW DETAILS
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default ResearchAreas;
