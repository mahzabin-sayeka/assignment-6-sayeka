import React from 'react';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 stickey top-0">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        
        {/* logo */}
        <div className="nav-digi">
          <span className="text-2xl font-bold text-[#7c3aed]">
            DigiTools
          </span>
        </div>


        <div className="hidden md:flex gap-8 text-black font-medium">
          <span>Products</span>
          <span>Features</span>
          <span>Pricing</span>
          <span>Testimonials</span>
          <span>FAQ</span>
        </div>

        
        <div className="flex items-center gap-6">
          
          <div className="relative icon-nabbar">
            <i className="fa-solid fa-cart-shopping text-gray-500"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#7c3aed] text-white text-[10px] rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </div>

          <button className="text-gray-700 font-bold">Login</button>
          
          <button className="bg-[#7c3aed] text-white px-6 py-2 rounded-full font-bold">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;