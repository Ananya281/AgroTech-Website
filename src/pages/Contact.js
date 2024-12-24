import React from "react";
import HeroSection from "../components/Contact/HeroSection";
import ContactForm from "../components/Contact/ContactForm";
import VisitUs from "../components/Contact/VisitUs";
import ConnectWithUs from "../components/Contact/ConnectWithUs";

const Contact = () => {
  return (
    <div>
      <HeroSection />
      <ContactForm />
      <VisitUs />
      <ConnectWithUs />
    </div>
  );
};

export default Contact;
