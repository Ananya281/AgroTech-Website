import React from "react";
import a from "../../assets/image/a.jpeg";
import b from "../../assets/image/b.jpeg";
import c from "../../assets/image/c.jpeg";
import d from "../../assets/image/d.jpeg";
import e from "../../assets/image/e.jpeg";
import farmer from "../../assets/image/farmer.jpeg";
import guava from "../../assets/image/guava.png";
import guava2 from "../../assets/image/guava2.png";
import guavaPhobi from "../../assets/image/GuavaPhobi.png";

const GallerySection = () => {
  // Separate arrays for 6 and 9 images
  const imagesForLaptop = [
    { src: a, alt: "A description" },
    { src: b, alt: "B description" },
    { src: c, alt: "C description" },
    { src: d, alt: "D description" },
    { src: e, alt: "E description" },
    { src: farmer, alt: "Farmer" },
  ];

  const imagesForDesktop = [
    ...imagesForLaptop,
    { src: guava, alt: "Guava image 1" },
    { src: guava2, alt: "Guava image 2" },
    { src: guavaPhobi, alt: "Guava Phobi" },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen py-16">
      {/* Grid for Laptop Screens (6 Images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 lg:hidden">
        {imagesForLaptop.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-60 lg:h-80 overflow-hidden cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-[1.3] group-hover:translate-z-0 group-hover:transform-origin-center grayscale hover:grayscale-0"
              style={{ transformOrigin: "center" }}
            />
          </div>
        ))}
      </div>

      {/* Grid for Desktop Screens (9 Images) */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-10">
        {imagesForDesktop.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-60 lg:h-80 overflow-hidden cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-[1.3] group-hover:translate-z-0 group-hover:transform-origin-center grayscale hover:grayscale-0"
              style={{ transformOrigin: "center" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
