import React from 'react';
import { FaUtensils } from 'react-icons/fa'; // Icon package (make sure it's installed)
import burgerimg from '../Images/HeroBurger.jpg';

const About = () => {
  return (
    <div className='min-h-[60vh] mt-10 bg-gradient-to-br from-yellow-50 to-red-100 px-4 py-16'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
        
        
        <div className='max-w-[500px] w-full mx-4 p-6 bg-white border border-gray-800 rounded-xl shadow-xl text-center md:text-left'>
          <div className='flex items-center justify-center md:justify-start gap-2 mb-4 text-red-600'>
            <FaUtensils className='text-3xl' />
            <h1 className='text-4xl font-extrabold text-gray-900'>About Us</h1>
          </div>
          <div className="h-1 w-20 bg-red-300 mx-auto md:mx-0 mb-4 rounded-full"></div>
          <p className='text-lg text-gray-700 mb-3 font-serif'>
            Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. Our team is passionate about food and service, and we can't wait to share our love for culinary excellence with you.
          </p>
          <p className='text-lg text-gray-700 font-serif'>
            Join us for a meal that will tantalize your taste buds and leave you wanting more!
          </p>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img 
            src={burgerimg}
            alt="Burger feature" 
            className="w-full max-w-md h-80 object-cover rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
          />  
        </div>
      </div>
    </div>
  );
};

export default About;
