import React from 'react';
import burgerimg from '../Images/HeroBurger.jpg';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden">
      {/* Left Side - Brand and Burger Image */}
      <div className="relative w-full md:w-1/2 h-full bg-yellow-400">
        <img 
          src={burgerimg}
          alt="Burger feature" 
          className="w-full h-full object-cover" 
        />
        
        {/* Large Brand Text Overlay */}
        <div className="absolute top-6 left-6 w-1/2 z-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            THE<br />DESIGN<br /><span className='text-yellow-500'>SNACK</span><br />.COM
          </h2>
        </div>
        
        {/* Bottom Text Overlays */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between">
          <div className="w-1/2 pr-4">
            <p className="text-sm font-medium text-white mb-2">
              FEATURED HIGHLIGHT
            </p>
            <p className="text-lg font-bold text-white">
              How tasty burger can increase your website engagement
            </p>
          </div>
          <div className="w-1/2 pl-4">
            <p className="text-sm font-medium text-white mb-2">
              INSIDE WEBSITE DESIGN
            </p>
            <p className="text-lg font-bold text-white">
              Taste test: how flavors convert to sales
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Side - Content */}
      <div className="flex flex-col w-full md:w-1/2 px-10 py-12 bg-white">
        <div className="mb-12">
          <h3 className="text-3xl text-gray-900 font-black mb-4 tracking-tight leading-tight uppercase">
            Some Questions <br/>before start website <br/>redesign project
          </h3>
          
          <div className="flex justify-between text-xs uppercase font-medium tracking-wider text-gray-600 mb-8 border-b border-gray-200 pb-2">
            <span>PUBLISHED DATE</span>
            <span>MONDAY, MAY 20, 2023</span>
            <span>CATEGORY</span>
            <span>REDESIGN TIPS</span>
          </div>
          
          <p className="text-sm leading-relaxed font-serif text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <div className="my-8 border-l-4 border-gray-800 pl-4">
            <h4 className="text-xl  text-gray-900 font-bold mb-2 italic">
              "What is the urgency to redesign the website?"
            </h4>
          </div>
          
          <p className="text-sm leading-relaxed font-serif text-gray-700 mb-6">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <p className="text-sm leading-relaxed font-serif text-gray-700 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        
        {/* Page Number */}
        <div className="absolute bottom-6 right-10 text-gray-400 font-medium text-lg">
          <p>1</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;