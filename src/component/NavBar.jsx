

import React from 'react';

// Appjsx theke count pathaisi

   const NavBar = ({ count }) => {

  return (
    <nav className="bg-white border-b border-gray-200 py-4 stickey top-0 nav-main-warp">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        
        {/* logo */}
        <div className="nav-digi">
          <span className="text-2xl font-bold text-[#7c3aed]">
            DigiTools
          </span>
        </div>

        {/* majer lekha gula navbar e */}
        <div className="hidden md:flex gap-8 text-black font-medium menu-links">
          <span>Products</span>
          <span>Features</span>
          <span>Pricing</span>
          <span>Testimonials</span>
          <span>FAQ</span>
        </div>

        {/* right side */}
        <div className="flex items-center gap-6 nav-right-part">
          
          <div className="relative icon-nabbar cursor-pointer">

            {/* cart icon font awsome theke*/}
            <i className="fa-solid fa-cart-shopping text-gray-500 text-xl"></i>
            
            
            {/* dynamic red note badge */}
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white badge-count">
                {count}
              </span>
            )}
          </div>

          <button className="text-gray-700 font-bold login-btn">Login</button>
          
          <button className="bg-gradient-to-r from-[#7c3aed] to-[#9e2db4] text-white px-6 py-2 rounded-full font-bold get-started-btn">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;