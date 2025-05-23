import React from 'react';
import Burgerimg from '../Images/Bgmenu.png';

const Menu = () => {
  return (
    <div className="bg-gray-50 px-4 py-2 md:px-12">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
          Recipe of the Week
        </div>
        <div className="text-sm font-bold text-white bg-red-600 px-3 py-1 rounded-full">
          02/03
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Item 1 */}
        <div>
          <h2 className="text-2xl font-bold">
            Basket of wedges <span className="text-gray-500 font-normal">—— 35</span>
          </h2>
          <img
            src={Burgerimg}
            alt="Fries"
            className="mx-auto my-4 w-62 h-52 object-cover rounded-lg"
          />
          <p className="font-semibold">Crispy potato wedges with extra crunchy.</p>
          <p className="text-sm text-gray-600 mt-2">
            Potatoes, Butter, Olive oil, Ground paprika, Lemon zest, Salt & Pepper for seasoning
          </p>
          <button className="mt-4 font-bold text-sm flex items-center gap-1 text-black hover:underline">
            Read More <span className="text-lg">+</span>
          </button>
        </div>

        {/* Item 2 */}
        <div>
          <h2 className="text-2xl font-bold">
            Chicken Burgers <span className="text-gray-500 font-normal">—— 18</span>
          </h2>
          <img
            src={Burgerimg}
            alt="Fries"
            className="mx-auto my-4 w-62 h-52 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-600">
            Chicken mince, Panko crumbs, Chicken stock powder and Eggs for coating the rissoles
          </p>
          <p className="font-semibold mt-2">Homemade chicken Burger with corn.</p>
          <button className="mt-4 font-bold text-sm flex items-center gap-1 text-black hover:underline">
            Read More <span className="text-lg">+</span>
          </button>
        </div>

        {/* Item 3 */}
        <div>
          <h2 className="text-2xl font-bold">Soft sugar drink</h2>
         <img
            src={Burgerimg}
            alt="Fries"
            className="mx-auto my-4 w-62 h-52 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-600">
            Drink with tangy flavor for your meal.
          </p>
          <p className="font-semibold mt-2">Perfect pairing with burgers or fries.</p>
          <button className="mt-4 font-bold text-sm flex items-center gap-1 text-black hover:underline">
            Read More <span className="text-lg">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
