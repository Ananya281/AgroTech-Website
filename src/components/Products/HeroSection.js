import React from "react";
import { Parallax } from "react-scroll-parallax";
import heroImage from "../../assets/image/farmer.jpeg"; // Adjust the path as per your folder structure
import './HeroSection.css'; // Add the custom CSS file for styling

const HeroSection = ({ title = "About", subtitle = "Agro-Tech" }) => {
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

          {/* Title and Subtitle Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="about-heading">{title}</h1>
            <h2 className="agro-tech-heading">{subtitle}</h2>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
