import React from 'react';
import bannerMain from '../assets/banner.png'; 

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row items-center gap-12">
      
    
      <div className="flex-1 baner-content">
        
{/* banner side text disign */}
        <div className="inline-flex items-center gap-2 bg-[#f3f0ff] px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
          <span className="text-[#7c3aed] text-sm font-semibold">New: AI-Powered Tools Available</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Supercharge Your <br /> <span className="text-[#7c3aed]">Digital Workflow</span>
        </h1>

        <p className="text-gray-500 text-lg mb-10 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
            
         
{/* button */}
        <div className="flex gap-4 flex-wrap">
          {/* <button className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-bold text-[15px]">
            Explore Products
          </button> */}
          <button className="bg-gradient-to-r from-[#7c3aed] to-[#9e2db4] text-white px-8 py-3 rounded-full font-bold text-[15px] hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Explore Products
          </button>
          
          <button className="border border-[#7c3aed] text-[#7c3aed] px-8 py-3 rounded-full font-bold flex items-center gap-2 text-[15px] hover:-translate-y-1 transition-all duration-300 active:scale-95">
            <i className="fa-regular fa-circle-play"></i> Watch Demo
          </button>
        </div>
      </div>

 {/* side or image*/}
      <div className="flex-1 baner-img-container">
        <img 
          src={bannerMain} 
          alt="Banner Image" 
          className="w-full h-auto rounded-xl"
        />
      </div>

    </div>
  );
};

export default Banner;