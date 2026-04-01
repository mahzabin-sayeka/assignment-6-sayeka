import React from 'react';


import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const StepsSection = () => {
  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* heading   */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* cards flex korsi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* box 01 */}
          <div className="bg-white p-10 rounded-[35px] border border-gray-100 relative shadow-sm">
            <span className="absolute top-6 right-6 bg-[#7c3aed] text-white text-[10px] font-bold h-7 w-7 flex items-center justify-center rounded-full">
              01
            </span>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#f3efff] rounded-full flex items-center justify-center">
                <img src={userImg} className="w-10 h-10 object-contain" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Create Account</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="bg-white p-10 rounded-[35px] border border-gray-100 relative shadow-sm">
            <span className="absolute top-6 right-6 bg-[#7c3aed] text-white text-[10px] font-bold h-7 w-7 flex items-center justify-center rounded-full">
              02
            </span>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#f3efff] rounded-full flex items-center justify-center">
                <img src={packageImg} className="w-10 h-10 object-contain" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Choose Products</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="bg-white p-10 rounded-[35px] border border-gray-100 relative shadow-sm">
            <span className="absolute top-6 right-6 bg-[#7c3aed] text-white text-[10px] font-bold h-7 w-7 flex items-center justify-center rounded-full">
              03
            </span>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#f3efff] rounded-full flex items-center justify-center">
                <img src={rocketImg} className="w-10 h-10 object-contain" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Start Creating</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsSection;