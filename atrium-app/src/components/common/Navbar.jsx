import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo Left */}
        <div className="text-2xl font-bold text-gray-800">ATRIUM</div>
        
        {/* Centered Menu (Hidden on Mobile) */}
        <div className="hidden md:flex mx-auto space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        
        {/* Right Corner: Demo Button (Box Style) */}
        <a 
          href="#demo" 
          className="hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
           For a Demo
        </a>
        
        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-600"
        >
          ☰
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;