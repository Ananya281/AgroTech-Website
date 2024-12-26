import React from "react";
import videoBg from "../../assets/video/1.mp4";

const HeroSection = () => {
  return (
    <header className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-5/6 object-cover"
        src={videoBg}
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          FV PLUS AGROTECH INNOVATIONS
        </h1>
        <p className="text-lg md:text-2xl mt-4">Towards a new world</p>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow leading-[0] z-11 mb-[-20] pb-0">
        <svg
          className="relative block w-full h-[250px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C50,80 100,0 150,40 C200,80 250,0 300,40 C350,80 400,0 450,40 C500,80 550,0 600,40 C650,80 700,0 750,40 C800,80 850,0 900,40 C950,80 1000,0 1050,40 C1100,80 1150,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-white" // Green color for agriculture theme
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
