import React from "react";
import productImage1 from "../../assets/image/d.jpeg";
import productImage2 from "../../assets/image/e.jpeg";

const ProductCards = () => {
  return (
    <div className="py-20 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-gray-800 text-center mb-16">
        Our Featured Products
      </h2>

      {/* Product Cards */}
      <div className="flex justify-center gap-8 px-4">
        {/* Product 1 */}
        <div className="flex-1 max-w-xl bg-white rounded-lg overflow-hidden transform transition-transform duration-300 group">
          <div className="relative">
            <img
              src={productImage1}
              alt="Product 1"
              className="w-full h-[400px] object-cover"
            />
            <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white bg-black bg-opacity-50 px-4 py-1 rounded group-hover:hidden transition-all duration-300">
              Guava Probi
            </h3>
            <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-80 px-4 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Guava Probi is made from freshly pureed guava fermented with
              probiotics, providing preserved functional properties for immunity
              and wellness.
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex-1 max-w-xl bg-white rounded-lg overflow-hidden transform transition-transform duration-300 group">
          <div className="relative">
            <img
              src={productImage2}
              alt="Product 2"
              className="w-full h-[400px] object-cover"
            />
            <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white bg-black bg-opacity-50 px-4 py-1 rounded group-hover:hidden transition-all duration-300">
              Iris
            </h3>
            <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-80 px-4 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Iris leverages technology for precision agriculture, enabling
              enhanced productivity and better crop health management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
