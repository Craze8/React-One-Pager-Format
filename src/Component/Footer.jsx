import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-10">
        
  
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-yellow-400">THE DESIGN SNACK</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

    
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">CONTACT US</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Email: hello@designsnack.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">FOLLOW US</h2>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300">
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300">
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Design Snack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
