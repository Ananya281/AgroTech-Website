import React, { useRef, useEffect } from "react";
import a from "../../assets/image/a.jpeg";
import b from "../../assets/image/b.jpeg";
import c from "../../assets/image/c.jpeg";
import d from "../../assets/image/d.jpeg";
import e from "../../assets/image/e.jpeg";
import farmer from "../../assets/image/farmer.jpeg";

const GallerySection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const slider = scrollContainerRef.current;

    // Infinite scrolling effect
    let scrollSpeed = 1; // Adjust the speed of the scroll
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0; // Reset scroll to the beginning
        } else {
          slider.scrollLeft += scrollSpeed; // Scroll to the right
        }
      }, 10);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    slider.addEventListener("mouseenter", stopScrolling);
    slider.addEventListener("mouseleave", startScrolling);

    startScrolling(); // Start scrolling when the component mounts

    return () => {
      clearInterval(scrollInterval);
      slider.removeEventListener("mouseenter", stopScrolling);
      slider.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <section className="py-16 bg-white mb-10">
      <h2 className="text-9xl font-bold text-left ml-20">Gallery</h2>
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-hidden cursor-grab no-scrollba"
        style={{
          whiteSpace: "nowrap",
          alignItems: "flex-end", // Align the bottom of images
        }}
      >
        {[a, b, c, d, e, farmer].map((image, index) => (
          <div
            key={index}
            style={{
              height: `${250 + Math.random() * 200}px`, // Random heights
            }}
            className="flex-shrink-0 z-100 transition-transform duration-300 transform hover:scale-110" // Add hover animation here
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-200 object-cover rounded-lg z-40"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
