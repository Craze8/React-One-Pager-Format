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
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            THE<br />DESIGN<br />SNACK<br />.COM
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
      
    <div className="min-h-screen bg-white p-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <span className="text-xs text-gray-500 font-semibold">{article.category}</span>
              <h2 className="mt-2 text-lg font-bold leading-tight">{article.title}</h2>
            </div>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Page Number - Bottom Right */}
      <div className="absolute bottom-6 right-10 text-gray-400 font-medium text-lg">
        <p>2</p>
      </div>
    </div>
  );
}

export default Hero;