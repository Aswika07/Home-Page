
import React from 'react';
import buildingVideo from '../../assets/building video.mp4';  // Import your video (adjust path/filename if needed, e.g., building-video.mp4)

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-20 pb-16 relative w-screen min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-Screen Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={buildingVideo}
        autoPlay
        loop
        muted
        playsInline  // Crucial for mobile autoplay
        preload="auto"
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Full-width centered text container */}
      <div className="relative z-10 text-center text-white w-full px-4 flex flex-col items-center justify-center">
        {/* Main Overlay Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg w-full text-center">
          WE DESIGN YOUR SPACE
        </h1>
        
        {/* Sentence Below */}
        <p className="text-xl md:text-2xl opacity-90 drop-shadow-md w-full text-center">
          Architectural plan with modern design and innovation.
        </p>
      </div>
    </section>
  );
};

export default Hero;