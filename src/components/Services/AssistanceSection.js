import React from "react";
import AssistanceImage from "../../assets/image/a.jpeg"; // Replace with your background image path

const AssistanceSection = () => {
  return (
    <section className="relative py-18 my-2 bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
      ></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center px-4 lg:px-0 my-5">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Stuck In Your Project? Let Us Help You Move Forward!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At FV AgroTech Innovations, we understand the challenges that arise during project
            development. Whether you're facing roadblocks, encountering technical hurdles, or
            seeking expert guidance, our team of seasoned professionals is here to offer tailored
            assistance.
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-600 transition duration-300">
            Get Assistance Now
          </button>
        </div>
      <img
          src={AssistanceImage}
          alt="Project Assistance"
          className="rounded-full shadow-md w-full border-4 h-full object-cover m-12 mb-15 opacity-90 mb-20 z-50 brightness-500"
          style={{
            maskImage: "radial-gradient(circle, white, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, white, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
};

export default AssistanceSection;
