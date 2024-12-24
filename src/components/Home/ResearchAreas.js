import React, { useState } from "react";
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
      className="h-screen bg-white relative flex flex-col items-center justify-center px-8"
      onMouseMove={showCursor ? handleMouseMove : null}
    >
      <div className="absolute top-8 w-full text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black tracking-wide mb-20 py-1">
          Research Areas
        </h2>
      </div>

      {/* Custom Circular Cursor */}
      {showCursor && (
        <div
          className="fixed w-32 h-32 bg-yellow-300 text-white flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 cursor-pointer"
          style={{
            left: cursorStyle.left,
            top: cursorStyle.top,
          }}
        >
          Read More
        </div>
      )}

      <div className="flex w-full h-[80%] gap-8 justify-center items-center px-6 mt-20 py-10">
        {/* Card 1 - Guava Probi */}
        <div className="flex-1 flex flex-col items-center justify-center h-full">
          <div
            className="relative bg-cover bg-center h-full w-full rounded-md overflow-hidden group"
            onMouseEnter={() => {
              setHoveredCard("guava");
              setShowCursor(true);
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setShowCursor(false);
            }}
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
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-4">
              <h4 className="text-4xl font-bold mb-2">Guava Probi</h4>
              <p className="px-4">
                Promotes gut-healthy microbiome and supports overall well-being.
                With all the natural benefits of whole guava, it promotes
                gut-healthy microbiomes, optimizes digestion and physiological
                balance, and contributes to improved overall health and
                well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - IRIS */}
        <div className="flex-1 flex flex-col items-center justify-center h-full">
          <div
            className="relative bg-cover bg-center h-full w-full rounded-md overflow-hidden group"
            onMouseEnter={() => {
              setHoveredCard("iris");
              setShowCursor(true);
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setShowCursor(false);
            }}
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
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-4">
              <h4 className="text-4xl font-bold mb-2">IRIS</h4>
              <p className="px-4">
                IRIS is a cutting-edge IoT device offering solutions that revamp
                fruit management from farm to table. This holistic system is
                designed to cater to each phase of the fruit supply chain,
                ensuring optimal fruit quality from producer to customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
