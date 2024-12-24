import React from "react";

const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="flex gap-4 justify-center">
        <img src="path-to-image1.jpg" alt="Lab Work" className="w-1/4" />
        <img src="path-to-image2.jpg" alt="Fruit Roll" className="w-1/4" />
        <img src="path-to-image3.jpg" alt="Worker" className="w-1/4" />
      </div>
    </section>
  );
};

export default GallerySection;
