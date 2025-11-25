import React, { useEffect, useRef } from 'react';
import building2 from '../../assets/building2.jpg';  // Import your background image

const ResidentialPlan = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation on mount
    if (leftRef.current) {
      leftRef.current.classList.add('animate-fadeIn');
    }
    if (rightRef.current) {
      rightRef.current.classList.add('animate-slideUp');
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Rectangular Background Image with Overlay */}
          <div
            ref={leftRef}
            className="group relative w-full aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden animate-none cursor-pointer" // Rectangular aspect ratio (wider)
            style={{
              backgroundImage: `url(${building2})`, // Use imported image
            }}
          >
            {/* Dark Overlay for Readability - Brightens on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out"></div>
           
            {/* White Box for Overlay Content: Centered 25 + Projects */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-6 m-4 max-w-sm shadow-lg transition-all duration-500 ease-in-out group-hover:bg-opacity-100 group-hover:scale-105">
                <div className="text-6xl font-bold mb-2 text-gray-800 drop-shadow-none">
                  25
                </div>
                <p className="text-xl font-semibold text-gray-700 drop-shadow-none">
                  Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            ref={rightRef}
            className="space-y-4 text-center md:text-left animate-none" // animate-none initially
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-all duration-700 ease-out">
              Architectural plan design and build
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed transition-all duration-700 ease-out delay-200">
              Tailored designs for modern living spaces, incorporating innovative architectural principles and sustainable materials to create timeless structures that inspire.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </section>
  );
};

export default ResidentialPlan;