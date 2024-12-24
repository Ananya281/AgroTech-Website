import React from "react";

const InnovationSection = () => {
  return (
    <section className="py-16 bg-gray-50 flex flex-col md:flex-row items-center gap-8">
      <img src="path-to-guava-image.jpg" alt="Guava" className="w-1/3" />
      <div>
        <h2 className="text-2xl font-bold mb-4">Innovation. Health. Growth.</h2>
        <p className="text-gray-600">
          FV Plus Agrotech Innovation is an emerging player in the field of fresh produce management...
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Know More
        </button>
      </div>
    </section>
  );
};

export default InnovationSection;
