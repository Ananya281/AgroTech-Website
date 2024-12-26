import React from "react";
import { Parallax } from "react-scroll-parallax";
import guavaImage from "../../assets/image/b.jpeg"; // Background image
import image1 from "../../assets/image/a.jpeg"; // Image for List Item 1
import image2 from "../../assets/image/b.jpeg"; // Image for List Item 2
import image3 from "../../assets/image/c.jpeg"; // Image for List Item 3
import image4 from "../../assets/image/d.jpeg"; // Image for List Item 4
import image5 from "../../assets/image/e.jpeg"; // Image for List Item 5

const GuavaProbiSection = () => {
  return (
    <div>
      {/* Parallax Background */}
      <div className="relative overflow-hidden">
        <Parallax speed={-15}>
          <div
            className="h-[70vh] w-full bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${guavaImage})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase drop-shadow-lg">
                Guava Probiotic Drink
              </h2>
              <p className="mt-4 text-lg md:text-xl max-w-3xl">
                Boost your immunity with natural probiotics that optimize digestion and enhance overall health.
              </p>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Informational Section */}
      <div className="relative py-20 bg-gray-100 text-gray-800 overflow-hidden">
        <h3 className="text-4xl font-extrabold mb-8 text-center">Why Choose Guava Probi?</h3>
        <p className="text-lg max-w-4xl mx-auto mb-12 text-center leading-relaxed">
          With the natural benefits of whole guava, this drink promotes a gut-healthy microbiome,
          optimizes digestion, and improves overall well-being.
        </p>

        {/* Benefits List */}
        <div className="relative flex flex-col gap-8 max-w-5xl mx-auto">
          {/* List Item 1 */}
          <div className="group relative flex items-center border-b border-gray-300 p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-lg font-medium text-gray-800 group-hover:text-green-600">
              Maintains and improves healthy gut flora.
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute right-0 top-0 transform translate-x-16 -translate-y-12">
              <img
                src={image1}
                alt="Healthy Gut Flora"
                className="w-40 h-40 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* List Item 2 */}
          <div className="group relative flex items-center border-b border-gray-300 p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-lg font-medium text-gray-800 group-hover:text-green-600">
              No added sugar.
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute right-0 top-0 transform translate-x-16 -translate-y-12">
              <img
                src={image2}
                alt="No Added Sugar"
                className="w-40 h-40 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* List Item 3 */}
          <div className="group relative flex items-center border-b border-gray-300 p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-lg font-medium text-gray-800 group-hover:text-green-600">
              100% natural and free from preservatives.
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute right-0 top-0 transform translate-x-16 -translate-y-12">
              <img
                src={image3}
                alt="Natural and Preservative Free"
                className="w-40 h-40 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* List Item 4 */}
          <div className="group relative flex items-center border-b border-gray-300 p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-lg font-medium text-gray-800 group-hover:text-green-600">
              Ideal for all age groups (0–90), pregnant women, and athletes.
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute right-0 top-0 transform translate-x-16 -translate-y-12">
              <img
                src={image4}
                alt="All Age Groups"
                className="w-40 h-40 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* List Item 5 */}
          <div className="group relative flex items-center border-b border-gray-300 p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-lg font-medium text-gray-800 group-hover:text-green-600">
              Highly nutritious and an immunity booster.
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute right-0 top-0 transform translate-x-16 -translate-y-12">
              <img
                src={image5}
                alt="Immunity Booster"
                className="w-40 h-40 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuavaProbiSection;
