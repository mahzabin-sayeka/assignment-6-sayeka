import React from 'react';

const SectionBlue = () => {
  return (
    <div className=" section-blu-main">
      
      {/* blu box color and size kora */}
      <div className="bg-gradient-to-r from-[#7c3aed] to-[#9815cc] py-16 px-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          
          {/* box item 1 */}
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold text-white mb-3">50K+</h2>
            <p className="text-[#f3f0ff] text-sm font-medium">Active Users</p>
          </div>

          {/* dekstop er jonno */}
          <div className="hidden md:block w-[1px] h-16 bg-white/20"></div>
          {/* choto screen er jonno */}
          <div className="md:hidden py-8"></div>

        
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold text-white mb-3">200+</h2>
            <p className="text-[#f3f0ff] text-sm font-medium">Premium Tools</p>
          </div>

          
          <div className="hidden md:block w-[1px] h-16 bg-white/20"></div>
          <div className="md:hidden py-8"></div>

          
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold text-white mb-3">4.9</h2>
            <p className="text-[#f3f0ff] text-sm font-medium">Rating</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SectionBlue;