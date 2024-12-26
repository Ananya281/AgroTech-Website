import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RunningText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    // Infinite horizontal scroll animation
    gsap.to(text, {
      x: "-100%", // Move the text to the left
      duration: 30, // Adjust speed
      repeat: -1, // Infinite looping
      ease: "linear", // Linear movement for smooth scrolling
    });
  }, []);

  return (
    <div className="bg-gray-50 py-8 overflow-hidden">
      <div
        className="relative text-8xl font-extrabold uppercase text-transparent bg-clip-text my-8"
        ref={textRef}
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          WebkitTextStroke: "1px #000", // Stroke effect for glowing
          filter: "drop-shadow(0px 10px 10px rgba(0, 255, 0, 0.8))", // Glow around text
        }}
      >
        Empowering Farmers with Innovation &nbsp; • &nbsp; Revolutionizing Agri-Tech &nbsp; • &nbsp; Empowering Farmers with Innovation &nbsp; • &nbsp;
      </div>
    </div>
  );
};

export default RunningText;
