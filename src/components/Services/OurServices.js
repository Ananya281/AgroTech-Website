import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import support1 from "../../assets/service/support1.jpg";
import support2 from "../../assets/service/support2.jpg";
import support3 from "../../assets/service/support3.jpg";
import support4 from "../../assets/service/support4.jpg";

import consult1 from "../../assets/service/consult1.jpg";
import consult2 from "../../assets/service/consult2.jpg";
import consult3 from "../../assets/service/consult3.jpg";
import consult4 from "../../assets/service/consult4.jpg";

import guidance1 from "../../assets/service/guidance1.jpg";
import guidance2 from "../../assets/service/guidance2.jpg";
import guidance3 from "../../assets/service/guidance3.jpg";
import guidance4 from "../../assets/service/guidance4.jpg";

import research1 from "../../assets/service/support1.jpg";
import research2 from "../../assets/service/support2.jpg";
import research3 from "../../assets/service/support3.jpg";
import research4 from "../../assets/service/support4.jpg";

import strategy1 from "../../assets/service/consult1.jpg";
import strategy2 from "../../assets/service/consult2.jpg";
import strategy3 from "../../assets/service/consult3.jpg";
import strategy4 from "../../assets/service/consult4.jpg";

import customer1 from "../../assets/service/guidance1.jpg";
import customer2 from "../../assets/service/guidance2.jpg";
import customer3 from "../../assets/service/guidance3.jpg";
import customer4 from "../../assets/service/guidance4.jpg";

const serviceData = [
  {
    title: "Technical Support",
    description: "Expert assistance to overcome technical challenges and optimize project execution.",
    details: [
      "System Troubleshooting & Debugging",
      "Network Configuration & Optimization",
      "Cybersecurity Enhancements & Threat Protection",
      "Software Installation & Licensing Assistance",
      "Hardware Performance Optimization & Upgrades",
      "Cloud Integration & Data Security",
      "Remote Assistance & IT Consulting",
      "Backup & Disaster Recovery Solutions",
    ],
    images: [support1, support2, support3, support4],
    id: "/001",
  },
  {
    title: "Project Consultation",
    description: "Comprehensive guidance to ensure smooth and efficient project delivery.",
    details: [
      "Project Roadmap & Strategic Planning",
      "Risk Assessment & Mitigation Strategies",
      "Resource Allocation & Budget Optimization",
      "Agile & Scrum Methodology Implementation",
      "Process Automation & Workflow Optimization",
      "Stakeholder Communication & Engagement",
      "Performance Metrics & KPI Analysis",
    ],
    images: [consult1, consult2, consult3, consult4],
    id: "/002",
  },
  {
    title: "Expert Guidance",
    description: "Specialized advice to help you achieve project goals successfully.",
    details: [
      "Industry-Specific Consultation & Best Practices",
      "Market Trend Analysis & Forecasting",
      "Regulatory Compliance & Risk Management",
      "Strategic Decision-Making & Leadership",
      "Growth & Expansion Strategies",
      "Emerging Technology Adoption & Implementation",
      "Competitive Analysis & Innovation Strategies",
    ],
    images: [guidance1, guidance2, guidance3, guidance4],
    id: "/003",
  },
  {
    title: "Research & Development",
    description: "Innovative solutions tailored to your specific needs and challenges.",
    details: [
      "Product Innovation & Lifecycle Management",
      "Technology Feasibility & Prototype Development",
      "Market Research & Competitive Analysis",
      "AI & Machine Learning Model Development",
      "Data-Driven Insights & Predictive Analytics",
      "Continuous Improvement & Performance Optimization",
      "Sustainable & Eco-Friendly Solutions",
    ],
    images: [research1, research2, research3, research4],
    id: "/004",
  },
  {
    title: "Strategy Planning",
    description: "Helping you align your goals with effective strategies.",
    details: [
      "Corporate Strategy & Business Growth Planning",
      "Competitive Intelligence & Market Positioning",
      "Operational Efficiency & Resource Management",
      "Risk Assessment & Crisis Management",
      "Financial Planning & Investment Strategies",
      "Long-Term Vision & Goal Alignment",
      "Strategic Partnerships & Collaborations",
    ],
    images: [strategy1, strategy2, strategy3, strategy4],
    id: "/005",
  },
  {
    title: "Customer Support",
    description: "Dedicated support to ensure your success and satisfaction.",
    details: [
      "24/7 Customer Assistance & Technical Helpdesk",
      "Real-Time Issue Resolution & Troubleshooting",
      "Client Relationship Management & Support Services",
      "User Feedback Collection & Continuous Improvement",
      "Personalized Support Plans & Service Optimization",
      "Onboarding Assistance & Training Programs",
      "AI Chatbots & Automation for Customer Engagement",
    ],
    images: [customer1, customer2, customer3, customer4],
    id: "/006",
  },
];

const OurServices = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-white text-gray-900 p-6 font-sans">
      <div className="mb-4">
        <p className="text-gray-600 uppercase text-sm tracking-wide">SERVICES</p>
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-extrabold">Our Capabilities</h2>
          <span className="text-green-500 text-4xl">↙</span>
        </div>
      </div>
      <div>
        {serviceData.map((service) => (
          <div key={service.id} className="border-t border-gray-200">
            <button
              className="w-full text-left py-8 px-4 flex justify-between items-center hover:bg-gray-100 transition"
              onClick={() => toggleSection(service.id)}
            >
              <span className="text-3xl font-medium">{service.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xl transition-transform duration-300 text-gray-600 ${openSection === service.id ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === service.id && (
  <div className="py-6 px-4 bg-gray-100 text-gray-800 border-t border-gray-200">
    <p className="text-lg mb-4">{service.description}</p>

    {/* Displaying Keywords */}
    <div className="grid grid-cols md:grid-cols-3 gap-1 mb-4">
      {service.details.map((detail, index) => (
        <p key={index} className="text-gray-700">{detail}</p>
      ))}
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
      {service.images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt="Service"
          className="rounded-lg shadow-lg w-full h-40 object-cover"
        />
      ))}
    </div>
  </div>
)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
