import React from "react";

const CarouselSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Flourish within an ecosystem cultivating your success
      </h2>
      <div className="flex space-x-4 justify-center">
        <img
          src="path-to-image1.jpg"
          alt="Image 1"
          className="w-48 h-48 rounded-lg shadow-md"
        />
        <img
          src="path-to-image2.jpg"
          alt="Image 2"
          className="w-48 h-48 rounded-lg shadow-md"
        />
        <img
          src="path-to-image3.jpg"
          alt="Image 3"
          className="w-48 h-48 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default CarouselSection;
