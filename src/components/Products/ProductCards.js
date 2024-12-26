import React from "react";
import { Parallax } from "react-scroll-parallax";
import productImage1 from "../../assets/image/d.jpeg";
import productImage2 from "../../assets/image/e.jpeg";

const ProductCards = () => {
  return (
    <div className="py-20 bg-gray-100 mt-10">
      {/* Section Title */}
      <Parallax speed={-10}>
        <h2 className="text-7xl font-bold text-gray-800 text-center mb-10">
          Our Featured Products
        </h2>
      </Parallax>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-20">
        {/* Product 1 */}
        <Parallax speed={5}>
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={productImage1}
              alt="Product 1"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800">
                Guava Probi
              </h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Guava Probi is made from freshly pureed guava fermented with
                probiotics, providing preserved functional properties for
                immunity and wellness.
              </p>
            </div>
          </div>
        </Parallax>

        {/* Product 2 */}
        <Parallax speed={10}>
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={productImage2}
              alt="Product 2"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800">Iris</h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Iris leverages technology for precision agriculture, enabling
                enhanced productivity and better crop health management.
              </p>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Additional Spacing */}
      <div className="mt-16"></div>
    </div>
  );
};

export default ProductCards;
