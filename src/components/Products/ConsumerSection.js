import React from "react";
import { Parallax } from "react-scroll-parallax";
import consumerImage from "../../assets/image/a.jpeg";

const ConsumerSection = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Parallax speed={-10}>
        <div
          style={{
            backgroundImage: `url(${consumerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              color: "#000",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            <h2>For Consumers</h2>
            <p>
              Experience the finest quality and innovation in every product. From daily essentials to
              premium selections, our products cater to your unique needs and preferences. Trust us
              to enhance your lifestyle.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ConsumerSection;
