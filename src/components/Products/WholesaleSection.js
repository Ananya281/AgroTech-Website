import React from "react";
import { Parallax } from "react-scroll-parallax";

const WholesaleSection = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center", backgroundColor: "#e9ecef" }}>
      <Parallax speed={5}>
        <h2>Wholesale Opportunities</h2>
      </Parallax>
      <Parallax speed={10}>
        <p>
          Partner with us to bring our quality products to your customers. 
          We offer excellent wholesale pricing and support.
        </p>
      </Parallax>
    </div>
  );
};

export default WholesaleSection;
