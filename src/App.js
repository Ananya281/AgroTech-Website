import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Research from "./pages/Research";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import $ from "jquery";
import "./App.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let counter = 0;
    let c = 0;

    const i = setInterval(() => {
      $(".loading-page .counter h1").html(`${c}%`);
      $(".loading-page .counter hr").css("width", `${c}%`);
      counter++;
      c++;

      if (counter === 101) {
        clearInterval(i);
        $(".loading-page").fadeOut(1000, () => {
          $("body").css("overflow", "auto");
          setShowContent(true);
        });
      }
    }, 50);
  }, []);

  return (
    <>
      <div className="loading-page">
        <div className="counter">
          <h1>0%</h1>
          <hr />
        </div>
      </div>

      {showContent && (
        <div className="fade-in">
          <Router>
            <Routes>
              <Route
                path="/products"
                element={
                  <ParallaxProvider>
                    <Products />
                  </ParallaxProvider>
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <Navbar />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/research" element={<Research />} />
                      <Route path="/get-involved" element={<GetInvolved />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
};

export default App;