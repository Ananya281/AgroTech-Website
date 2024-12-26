import React, { useEffect, useState, useRef } from "react";
import image1 from "../../assets/image/a.jpeg"; // Replace with your actual image path
import image2 from "../../assets/image/b.jpeg"; // Replace with your actual image path
// import OurCards from "../components/OurCards";

const OurMission = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
  const sectionRef = useRef(null); // Reference for the OurMission section

  useEffect(() => {
    const handleMouseMove = (e) => {
      const bounds = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      setCursorStyle({ left: `${x}px`, top: `${y}px` });
    };

    const section = sectionRef.current;

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gray-50 text-black relative"
      style={{ position: "relative" }}
    >
      {/* Custom Glowing Cursor */}
      <div
        className="absolute w-0.1 h-0.1 rounded-full pointer-events-none z-48"
        style={{
          left: cursorStyle.left,
          top: cursorStyle.top,
          background: "linear-gradient(90deg, #00ff00, #ffff00)", // Green to yellow gradient
          boxShadow: "0 0 100px 100px rgba(0, 255, 0, 0.3)", // Greenish glow
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div
          className="relative w-full max-h-[300px] overflow-hidden"
          style={{
            borderRadius: "20px",
            boxShadow: "0 0 40px rgba(255, 255, 255, 0.8)",
          }}
        >
          <img
            src={image1}
            alt="Image 1"
            className="rounded-lg shadow-md w-full h-full object-cover"
            style={{
              maskImage: "radial-gradient(circle, white, transparent 50%)",
              WebkitMaskImage: "radial-gradient(circle, white, transparent 50%)",
            }}
          />
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mx-20">
            Mission <br /> + <br /> Vision
          </h2>
          <p className="text-sm md:text-lg max-w-4xl mx-auto text-gray-600 mt-4">
            We rescue farmed animals and give them care and sanctuary, connect
            animals with people to advance veganism, and advocate for animal
            rights in alliance with other social justice movements. The
            sanctuary welcomes visitors to meet animals who are most commonly
            exploited, abused, and killed in animal agriculture.
          </p>
        </div>

        <div
          className="relative w-full max-h-[300px] overflow-hidden"
          style={{
            borderRadius: "20px",
            boxShadow: "0 0 40px rgba(255, 255, 255, 0.8)",
          }}
        >
          <img
            src={image2}
            alt="Image 2"
            className="rounded-lg shadow-md w-full h-full object-cover"
            style={{
              maskImage: "radial-gradient(circle, white, transparent 50%)",
              WebkitMaskImage: "radial-gradient(circle, white, transparent 50%)",
            }}
          />
        </div>
      </div>

      {/* Include the OurCards Component */}
      {/* <OurCards /> */}
    </section>
  );
};

export default OurMission;
