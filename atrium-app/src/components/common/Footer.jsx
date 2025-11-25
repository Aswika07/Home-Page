import React from "react";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden font-sans">
      <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="building-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#building-pattern)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            Follow Us
          </h3>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="group transform transition-transform duration-300 hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-white transition-colors duration-300 ease-in-out group-hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="group transform transition-transform duration-300 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white transition-colors duration-300 ease-in-out group-hover:text-pink-400" />
            </a>

            <a
              href="#"
              className="group transform transition-transform duration-300 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white transition-colors duration-300 ease-in-out group-hover:text-blue-600" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            Do you have any query?
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            We’re happy to assist you with questions regarding interior design,
            project execution, or collaborations.
          </p>
        </div>
        <div className="flex md:justify-end">
          <button className="bg-black text-white px-6 py-2 text-sm font-medium rounded-lg border border-gray-700 shadow-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;