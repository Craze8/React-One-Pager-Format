import React from 'react';
import Cookies from '../Images/Homepagebg.png';

const Homepage = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[60vh] lg:h-[40vh] bg-white overflow-hidden flex items-center">

      <img
        src={Cookies}
        alt="Background"
        className="absolute w-full h-full object-cover"
      />
          
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>

      {/* Logo text on the left */}
      <div className="absolute top-6 left-4 md:left-12 z-20 flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase whitespace-pre-line drop-shadow-lg">
          THE<br />DESIGN<br /><span className="text-yellow-400">SNACK</span><br />.COM
        </h2>
      </div>

      {/* Main heading and button */}
      <div className="relative ml-34vh z-20 flex flex-col items-start mx-auto w-full max-w-xl px-4 md:px-0">
        <div className="bg-black bg-opacity-80 px-6 py-4 rounded shadow-lg mt-20 md:mt-0">
          <h3 className="text-xl md:text-3xl font-mono text-white font-black tracking-tight uppercase leading-snug">
            How to create<br />
            grunge texture on<br />
            design using Figma
          </h3>
        </div>
        <button className="mt-4 px-5 py-2 bg-yellow-500 text-black text-xs md:text-sm font-bold rounded hover:bg-yellow-600 transition-all flex items-center gap-2 shadow">
          READ MORE <span className="text-lg">→</span>
        </button>
      </div>
 
    </div>
  );
};

export default Homepage;