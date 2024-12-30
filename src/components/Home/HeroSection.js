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
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Animated Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <figure
          className="quote"
          aria-label="You expect this pen to do one thing but it changed into something else. — Zach Saucier"
        >
          <blockquote cite="" aria-hidden>
            <p className="colored-text">
              <span>"Innovating today</span>
            </p>

            <div className="cut-text-container">
              <p className="cut-text">
                <span>"Sustaining tomorrow</span>
                <span> with Agrotech"</span>
              </p>
            </div>

            <p className="colored-text second">
            <span>with Agrotech solutions"</span>
            </p>
          </blockquote>

          <figcaption aria-hidden>
            <cite>FV Plus Agrotech</cite>
          </figcaption>
        </figure>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 -mb-[5px]">
        <svg
          className="relative block w-full h-[270px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C50,80 100,0 150,40 C200,80 250,0 300,40 C350,80 400,0 450,40 C500,80 550,0 600,40 C650,80 700,0 750,40 C800,80 850,0 900,40 C950,80 1000,0 1050,40 C1100,80 1150,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
