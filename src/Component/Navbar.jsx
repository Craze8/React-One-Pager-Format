import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white">THE BAR</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-blue-500">Home</a>
            <a href="#" className="text-white hover:text-blue-500">About</a>
            <a href="#" className="text-white hover:text-blue-500">Services</a>
            <a href="#" className="text-white hover:text-blue-500">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
