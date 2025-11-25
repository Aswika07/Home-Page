import React from 'react';
import building3 from '../../assets/building3.jpg'; // Adjust path as needed (e.g., if in public folder, use '/building3.jpeg')
import building4 from '../../assets/building4.jpg';
import building5 from '../../assets/building5.jpg';

const MakeDreams = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Make Dreams with US</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <img
              src={building3}
              alt="Interior"
              className="w-32 h-32 mx-auto rounded-full shadow-md object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interior</h3>
            <p className="text-gray-600">
              Transform your spaces with cutting-edge IT-integrated interior designs that blend functionality, aesthetics, and smart technology for seamless living and working environments.
            </p>
          </div>
          <div className="text-center">
            <img
              src={building4}
              alt="Exterior"
              className="w-32 h-32 mx-auto rounded-full shadow-md object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exterior</h3>
            <p className="text-gray-600">
              Elevate your building's facade with sustainable IT solutions, including energy-efficient systems and IoT-enabled facades that enhance durability, security, and visual appeal.
            </p>
          </div>
          <div className="text-center">
            <img
              src={building5}
              alt="Bridge"
              className="w-32 h-32 mx-auto rounded-full shadow-md object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bridge</h3>
            <p className="text-gray-600">
              Connect structures and ideas effortlessly with advanced networking bridges and IT infrastructure that ensure reliable data flow, scalability, and future-proof integration across projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeDreams;