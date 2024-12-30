import React from "react";
import guavaImage from "../../assets/image/guava2.png"; // Import your image

const InnovationSection = () => {
  return (
    <section className="-mt-[100px] py-6 px-7 mb-20 z-20 bg-white flex flex-col md:flex-row items-center gap-10">
    {/* Image Section */}
    <div
      className="w-full md:w-1/2 flex justify-center items-center"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <img
        src={guavaImage}
        alt="Guava"
        className="w-full md:w-4/5 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  
    {/* Text Content Section */}
    <div
      className="w-full md:w-1/2"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <h2 className="text-6xl font-extrabold text-gray-800 mb-4">
        Innovation. Health. Growth.
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        FV Plus Agrotech Innovation is an emerging player in the field of fresh
        produce management. We specialize in pioneering and cost-effective
        technologies for processing fruits and vegetables. Our solutions aim to
        tackle food security challenges and promote sustainable agricultural
        practices.
      </p>
      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300">
        Know More
      </button>
    </div>
  </section>
  
  );
};

export default InnovationSection;
