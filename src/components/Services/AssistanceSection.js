import React from "react";

const AssistanceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Stuck In Your Project? Let Us Help You Move Forward!</h2>
          <p className="text-gray-600">
            At FV AgroTech Innovations, we understand the challenges that arise during project development. Whether
            you're facing roadblocks, encountering technical hurdles, or seeking expert guidance, our team of seasoned
            professionals is here to offer tailored assistance.
          </p>
        </div>
        <img
          src="path-to-assistance-image.jpg"
          alt="Project Assistance"
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AssistanceSection;
