import React from "react";
import videoBg from "../../assets/video/1.mp4";
import "./HeroSection.css"; // Include the CSS for the animations

const HeroSection = () => {
  return (
    <header className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        type="video/mp4"
        autoPlay
        loop
        muted
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Animated Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <figure
          className="quote"
          aria-label="Innovating today, Sustaining tomorrow, with Agrotech solutions"
        >
          <blockquote>
            <p
              className="colored-text text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ lineHeight: "1.3" }}
            >
              <span>"Innovating today"</span>
            </p>

            <div
              className="cut-text-container bg-white text-black px-4 py-2 mt-4 rounded-lg"
              style={{ maxWidth: "90%" }}
            >
              <p
                className="cut-text text-xl sm:text-2xl md:text-3xl font-semibold"
                style={{ lineHeight: "1.4" }}
              >
                <span>"Sustaining tomorrow"</span>
                <span>with Agrotech solutions"</span>
              </p>
            </div>
          </blockquote>

          <figcaption className="mt-4 text-sm sm:text-base md:text-lg font-light">
            <cite>FV Plus Agrotech</cite>
          </figcaption>
        </figure>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 -mb-[5px]">
        <svg
          className="relative block w-full h-[150px] sm:h-[200px] md:h-[250px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Default path for larger devices */}
          <path
            d="M0,40 C50,80 100,0 150,40 C200,80 250,0 300,40 C350,80 400,0 450,40 C500,80 550,0 600,40 C650,80 700,0 750,40 C800,80 850,0 900,40 C950,80 1000,0 1050,40 C1100,80 1150,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-white hidden sm:block"
          ></path>

          {/* Simpler path for smaller devices */}
          <path
            d="M0,40 C100,80 200,0 300,40 C400,80 500,0 600,40 C700,80 800,0 900,40 C1000,80 1100,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-white block sm:hidden"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
