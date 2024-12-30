import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useScroll, useTransform, motion } from "framer-motion";
import backgroundImage from "../../assets/image/farmer.jpeg"; // Replace with the path to your background image

const WhyUsSection = () => {
  const maskRef = useRef(null);
  const sectionRef = useRef(null);
  const [hoveringText, setHoveringText] = useState(false);

  // Use `useScroll` and `useTransform` for the background image and overlay
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']); // Parallax effect
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1.2, 1]); // Zoom-out effect

  useEffect(() => {
    const updateMaskPosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update mask position using GSAP
      gsap.to(maskRef.current, {
        x: x - 50, // Adjust offset to center the mask
        y: y - 50,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Hide the default cursor
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", updateMaskPosition);

    return () => {
      document.body.style.cursor = ""; // Reset cursor to default on cleanup
      window.removeEventListener("mousemove", updateMaskPosition);
    };
  }, []);

  useEffect(() => {
    // Adjust mask size based on hoveringText state
    gsap.to(maskRef.current, {
      scale: hoveringText ? 7.5 : 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [hoveringText]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full text-center flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* Background and Black Overlay with Parallax and Zoom-Out */}
      <motion.div
        style={{
          y: yTransform,
          scale: scaleTransform,
        }}
        className="absolute inset-0"
      >
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </motion.div>

      {/* GSAP Mask */}
      <div
        ref={maskRef}
        className="fixed w-10 h-10 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        style={{
          top: 0,
          left: 0,
        }}
      ></div>

      {/* Content */}
      <div
        className="absolute z-10"
        onMouseEnter={() => setHoveringText(true)}
        onMouseLeave={() => setHoveringText(false)}
      >
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-4 max-w-50"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          WHY FV PLUS <br /> AGROTECH INNOVATION?
        </h2>
        <div className="w-80 h-1 bg-green-500 mx-auto my-4"></div>
        <p
          className="text-lg md:text-xl text-gray-200"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          OUR WORKS AND OBJECTIVES
        </p>
      </div>
    </section>
  );
};

export default WhyUsSection;
