import React, { useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import juice from "../../assets/image/a.jpeg"; // Replace with actual image path
import cupcake from "../../assets/image/b.jpeg"; // Replace with actual image path
import jam from "../../assets/image/c.jpeg"; // Replace with actual image path
import soup from "../../assets/image/d.jpeg"; // Replace with actual image path
import jelly from "../../assets/image/e.jpeg"; // Replace with actual image path
import pie from "../../assets/image/f.jpeg"; // Replace with actual image path
import cookies from "../../assets/image/a.jpeg"; // Replace with actual image path
import candy from "../../assets/image/b.jpeg"; // Replace with actual image path

const VarietySection = () => {
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
      }, 20);
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

  const products = [
    { name: "Juices", image: juice },
    { name: "Cupcakes", image: cupcake },
    { name: "Jams", image: jam },
    { name: "Soups", image: soup },
    { name: "Jelly", image: jelly },
    { name: "Pies", image: pie },
    { name: "Cookies", image: cookies },
    { name: "Candies", image: candy },
  ];

  return (
    <section className="py-20 bg-gray-100 relative">
      {/* Parallax Background */}
      <Parallax speed={-10}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${juice})`, // Replace with a relevant background image
            zIndex: -1,
            height: "100%",
          }}
        ></div>
      </Parallax>

      {/* Section Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Variety of Products That Can Be Made
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto mb-12">
          Explore a diverse range of products tailored for every taste and
          preference.
        </p>

        {/* Scrolling Product Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-hidden no-scrollbar cursor-grab"
        >
          {products.map((product, index) => (
            <Parallax key={index} speed={5 + index * 2}>
              <div
                className="relative flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
                style={{
                  height: `${250 + Math.random() * 150}px`, // Different top heights
                  width: "200px", // Set a fixed width for all cards
                }}
              >
                <div className="relative overflow-hidden h-full w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-[-5%] group-hover:translate-x-[-5%]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-center font-semibold text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VarietySection;
