import React from "react";
import { Parallax } from "react-scroll-parallax";
import heroImage from "../../assets/image/farmer.jpeg"; // Adjust the path as per your folder structure

const HeroSection = ({ title = "Welcome to Our Products" }) => {
  return (
    <div className="relative h-screen overflow-hidden bg-cover bg-center">
      <Parallax speed={-35}>
        <div
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Title Text */}
          <h1 className="absolute inset-0 flex items-center justify-center text-white font-poppins text-5xl md:text-8xl lg:text-7xl font-extrabold drop-shadow-lg">
            {title}
          </h1>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
