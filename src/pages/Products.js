import React from "react";
import HeroSection from "../components/Products/HeroSection";
import ProductCards from "../components/Products/ProductCards";
import GuavaProbiSection from "../components/Products/GuavaProbiSection";
import VarietySection from "../components/Products/VarietySection";
import IrisSection from "../components/Products/IrisSection";
import "../App.css"; // Assuming fade-in styles are in App.css

const Products = () => {
  return (
    <div className="fade-in">
      <HeroSection title="Welcome to Our Products" />
      <ProductCards />
      <GuavaProbiSection />
      {/* <BenefitsSection /> */}
      <VarietySection />
      <IrisSection />
      {/* <WhyIrisSection /> */}
      {/* <WholesaleSection /> */}
      {/* <RetailerSection /> */}
      {/* <ConsumerSection /> */}
    </div>
  );
};

export default Products;
