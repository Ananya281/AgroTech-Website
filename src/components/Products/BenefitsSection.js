import Image1 from "../../assets/image/a.jpeg";
import Image2 from "../../assets/image/b.jpeg";
import Image3 from "../../assets/image/c.jpeg";
import Image4 from "../../assets/image/d.jpeg";
import Image5 from "../../assets/image/e.jpeg";
import Image6 from "../../assets/image/f.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define individual scaling effects for each image
  const scaleEffects = [
    useTransform(scrollYProgress, [0, 1], [1.2, 0.9]),
    useTransform(scrollYProgress, [0, 1], [1.3, 0.8]),
    useTransform(scrollYProgress, [0, 1], [1.4, 0.7]),
    useTransform(scrollYProgress, [0, 1], [1.2, 0.9]),
    useTransform(scrollYProgress, [0, 1], [1.3, 0.8]),
    useTransform(scrollYProgress, [0, 1], [1.4, 0.7]),
  ];

  const pictures = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div ref={containerRef} className="container">
      <div className="image-grid">
        {pictures.map((src, index) => (
          <motion.div
            key={index}
            style={{ scale: scaleEffects[index] }}
            className="grid-item"
          >
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
