import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollTextAnimation = () => {
  const [inView, setInView] = useState(false);

  // Function to check if element is in the viewport
  const checkScroll = () => {
    const element = document.getElementById("scrollText");
    const rect = element.getBoundingClientRect();
    // If the element is in the viewport, set inView to true
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check if the element is in view when the component is loaded

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      {/* Scroll-triggered motion animation */}
      <motion.div
        id="scrollText"
        className="text-3xl font-bold text-center p-6"
        initial={{ opacity: 0, y: 50 }} // Initial position off-screen and hidden
        animate={{
          opacity: inView ? 1 : 0,  // Fade in when in view
          y: inView ? 0 : 50,       // Move up to normal position when in view
        }}
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        <h2>Scroll down to reveal this text smoothly</h2>
      </motion.div>
    </section>
  );
};

export default ScrollTextAnimation;
