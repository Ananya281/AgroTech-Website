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
  const images = [
    { src: a, alt: "1" },
    { src: b, alt: "2" },
    { src: c, alt: "5" },
    { src: d, alt: "7" },
    { src: e, alt: "8" },
    { src: farmer, alt: "9" },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen py-16">
      <div
        className="grid gap-2"
        style={{
          gridTemplateAreas: `
            "one one two"
            "five five two"
            "seven eight nine"
            "eleven eleven eleven"
          `,
          gridTemplateColumns: "400px 400px 400px", // Reduced column size
          gridTemplateRows: "200px 200px 200px", // Reduced row size
        }}
      >
        {images.map((image, index) => {
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
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group`}
              style={{
                gridArea: gridAreaNames[index], // Dynamically set grid area
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110 grayscale hover:grayscale-0"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
