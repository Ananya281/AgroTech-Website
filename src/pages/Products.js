import React from "react";
import HeroSection from "../components/Products/HeroSection";
import ProductCards from "../components/Products/ProductCards";
import GuavaProbiSection from "../components/Products/GuavaProbiSection";
import BenefitsSection from "../components/Products/BenefitsSection";
import VarietySection from "../components/Products/VarietySection";
import IrisSection from "../components/Products/IrisSection";
import WhyIrisSection from "../components/Products/WhyIrisSection";
import WholesaleSection from "../components/Products/WholesaleSection";
import RetailerSection from "../components/Products/RetailerSection";
import ConsumerSection from "../components/Products/ConsumerSection";

const Products = () => {
  return (
    <div>
      <HeroSection title="Welcome to Our Products"/>
      <ProductCards />
      <GuavaProbiSection />
      <BenefitsSection />
      <VarietySection />
      <IrisSection />
      {/* <WhyIrisSection /> */}
      {/* <WholesaleSection /> */}
      <RetailerSection />
      {/* <ConsumerSection />  */}
    </div>
  );
};

export default Products;
