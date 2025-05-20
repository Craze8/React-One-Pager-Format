import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      
   

      {/* Right side - Text */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-8 py-12 md:py-0 space-y-6">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left leading-tight">
            Welcome to Our <span className="text-blue-400">Website</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 text-center md:text-left">
            Your one-stop solution for all your digital needs. We provide exceptional service with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-8 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-medium rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        
      </div>
         {/* Left side - Image with overlay */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <img 
          src="https://placehold.co/300x400" 
          alt="Hero placeholder" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
       
      </div>
    </div>
  );
}

export default Hero;
