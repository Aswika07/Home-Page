import React from "react";
import { ArrowRight } from "lucide-react";
import building1 from '../../assets/building1.jpg';
import building6 from '../../assets/building6.jpg';
import building7 from '../../assets/building7.jpg';
import building8 from '../../assets/building8.jpg';

// --- Project Data ---
const projects = [
  {
    title: 'Urban Tower',
    description: 'Modern high-rise residential building with integrated IT solutions for smart living.',
    image: building1
  },
  {
    title: 'Kerala Style Home',
    description: 'Traditional Kerala-style home featuring sustainable IT infrastructure and automation for serene tropical living.',
    image: building6
  },
  {
    title: 'Cozy Coffee Shop',
    description: 'Vibrant coffee shop optimized with advanced networking and IoT systems for seamless customer experiences.',
    image: building7
  },
  {
    title: 'Modern Building',
    description: 'Contemporary commercial building incorporating reliable IT connectivity and monitoring for efficient operations.',
    image: building8
  }
];

const OurProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group`}
            >
              {/* Image Container - Rectangular & Reduced Size (40% width on desktop) */}
              <div className="w-full lg:w-2/5 h-48 lg:h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { 
                    e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; 
                    console.error(`Failed to load image for ${project.title}`);
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center relative">
                 {/* Decorative background number */}
                 <span className="absolute top-4 right-6 text-6xl font-bold text-gray-50 opacity-50 select-none">
                   0{index + 1}
                 </span>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                  <button className="bg-white border border-gray-200 px-6 py-2 rounded-full shadow-sm text-sm font-semibold text-blue-600 hover:bg-gray-50 hover:text-blue-700 hover:border-blue-200 transition-all flex items-center group/btn">
                    View Details 
                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;