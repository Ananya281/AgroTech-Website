import React from "react";
import HeroSection from "../components/Products/HeroSection";
import ProductCards from "../components/Products/ProductCards";
import GuavaProbiSection from "../components/Products/GuavaProbiSection";
import VarietySection from "../components/Products/VarietySection";
import IrisSection from "../components/Products/IrisSection";
import ProductNavbar from "../components/Products/ProductNavbar";
import "../App.css"; 
import { HeroParallax } from "../components/Products/hero-parallax";
import { Carousel, Card } from "../components/Products/cards-carousel";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img4.png";
import img5 from "../assets/image/img5.png";
import img6 from "../assets/image/img6.png";
import img7 from "../assets/image/img7.png";
import img8 from "../assets/image/img8.png";
import img9 from "../assets/image/img9.png";
import img10 from "../assets/image/img10.png";
import img11 from "../assets/image/img11.png";
import img12 from "../assets/image/img12.png";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";
import img15 from "../assets/image/img15.png";
import { motion } from "framer-motion";


const productss = [
  { title: "Product 1", thumbnail: img1, link: "/product1" },
  { title: "Product 2", thumbnail: img2, link: "/product2" },
  { title: "Product 3", thumbnail: img3, link: "/product3" },
  { title: "Product 4", thumbnail: img4, link: "/product4" },
  { title: "Product 5", thumbnail: img5, link: "/product5" },
  { title: "Product 6", thumbnail: img6, link: "/product6" },
  { title: "Product 7", thumbnail: img7, link: "/product7" },
  { title: "Product 8", thumbnail: img8, link: "/product8" },
  { title: "Product 9", thumbnail: img9, link: "/product9" },
  { title: "Product 10", thumbnail: img10, link: "/product10" },
  { title: "Product 11", thumbnail: img11, link: "/product11" },
  { title: "Product 12", thumbnail: img12, link: "/product12" },
  { title: "Product 13", thumbnail: img13, link: "/product13" },
  { title: "Product 14", thumbnail: img14, link: "/product14" },
  { title: "Product 15", thumbnail: img15, link: "/product15" },
];

function AgrotechCardsDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-black-200 font-sans">
        Discover FVPlus Innovations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ContentSection = () => (
  <>
    {[...Array(3)].map((_, index) => (
      <motion.div
        key={"content-" + index}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Transforming agriculture through innovation.
          </span>{" "}
          Our advanced processing technologies ensure optimal preservation of fruits and vegetables,
          maintaining their nutritional value while extending shelf life. From farm to table,
          we're revolutionizing the way produce is handled and processed.
        </p>
        <img
          src= {img14}
          alt="FVPlus Agrotech Innovation"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </motion.div>
    ))}
  </>
);

const data = [
  { category: "Processing Technology", title: "Advanced Fruit Processing", src: img6, content: <ContentSection /> },
  { category: "Innovation", title: "Smart Monitoring Systems", src: img3, content: <ContentSection /> },
  { category: "Products", title: "Guava Probi Technology", src: img14, content: <ContentSection /> },
  { category: "Solutions", title: "Post-Harvest Management", src: img15, content: <ContentSection /> },
  { category: "Research", title: "IRIS IoT Solutions", src: img3, content: <ContentSection /> },
];


const Products = () => {
  return (
    <div className="fade-in">
          <ProductNavbar />
      <HeroParallax products={productss} />
{/*       <HeroSection title="Welcome to Our Products" />
 */}      {/* <ProductCards /> */}
                  <AgrotechCardsDemo />

      <GuavaProbiSection />
      {/* <BenefitsSection /> */}
      {/* <VarietySection />
      <IrisSection /> */}
      {/* <WhyIrisSection /> */}
      {/* <WholesaleSection /> */}
      {/* <RetailerSection /> */}
      {/* <ConsumerSection /> */}
    </div>
  );
};

export default Products;
