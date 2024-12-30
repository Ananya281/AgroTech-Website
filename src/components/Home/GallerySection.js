import React from "react";
import a from "../../assets/image/a.jpeg";
import b from "../../assets/image/b.jpeg";
import c from "../../assets/image/c.jpeg";
import d from "../../assets/image/d.jpeg";
import e from "../../assets/image/e.jpeg";
import farmer from "../../assets/image/farmer.jpeg";

const GallerySection = () => {
  const images = [
    { src: a, alt: "1" },
    { src: b, alt: "2" },
    { src: c, alt: "5" },
    { src: d, alt: "7" },
    { src: e, alt: "8" },
    { src: farmer, alt: "9" },
  ];

  const gridAreaNames = [
    "one",
    "two",
    "five",
    "seven",
    "eight",
    "nine",
    "eleven",
  ];

  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-16">
      {/* Small Heading */}
      <h3
        className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        OUR GALLERY
      </h3>
      {/* Separator Line */}
      <div className="w-64 h-[0.5px] bg-green-600 mb-8"></div>

      <div
        className="grid gap-4 w-full max-w-7xl mx-auto px-4"
        style={{
          gridTemplateAreas: `
            "one one two"
            "five five two"
            "seven eight nine"
            "eleven eleven eleven"
          `,
          gridTemplateColumns: "repeat(3, 1fr)", // Responsive column sizing
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer group"
            style={{
              gridArea: gridAreaNames[index],
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .grid {
            grid-auto-rows: 200px; /* Slightly increased row height for laptops */
          }
        }
        @media (max-width: 1024px) {
          .grid {
            grid-auto-rows: minmax(150px, 1fr); /* Default for smaller screens */
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
