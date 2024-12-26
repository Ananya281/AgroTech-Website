import React from "react";

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-green-100 to-white text-center relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white opacity-80 pointer-events-none"></div>

      {/* Glassy Card Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 bg-white/10 rounded-lg shadow-2xl backdrop-blur-xl border border-white/30 p-10 mb-50">
        <h2 className="text-5xl font-extrabold text-green-800 mb-8 leading-tight">
          Our <span className="text-yellow-500">Agricultural Solutions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
          Addressing agricultural challenges with <strong>innovative</strong> and <strong>cost-effective</strong> solutions. We aim to enhance crop productivity, minimize waste, and ensure sustainable farming practices for a better future.
        </p>
        <button className="px-8 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Decorative Floating Elements with Moving Animation */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-80 blur-xl animate-floating-slow"></div>
      <div className="absolute bottom-0 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-40 blur-lg animate-floating-medium"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-30 blur-lg animate-floating-fast"></div>

      <style jsx>{`
        @keyframes floating-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floating-medium {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes floating-fast {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        .animate-floating-slow {
          animation: floating-slow 6s ease-in-out infinite;
        }

        .animate-floating-medium {
          animation: floating-medium 4s ease-in-out infinite;
        }

        .animate-floating-fast {
          animation: floating-fast 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;
