import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* heading lines*/}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* cards grid korsi*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* protom card */}
          <div className="bg-white p-10 rounded-[35px] border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-8">Perfect for getting started</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-gray-900">$0</span>
                <span className="text-gray-400 text-lg font-medium">/Month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Access to 10 free tools</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Basic templates</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Community support</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> 1 project per month</li>
              </ul>
            </div>
            <button className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl font-bold text-lg">Get Started Free</button>
          </div>

          {/* majer cart */}
          <div className="bg-[#7c3aed] p-10 rounded-[35px] relative shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            {/* most popular badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fef3c7] text-[#92400e] text-[10px] font-bold px-4 py-1.5 rounded-full shadow-sm">
              Most Popular
            </span>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-purple-200 text-sm mb-8">Best for professionals</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black">$29</span>
                <span className="text-purple-200 text-lg font-medium">/Month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm opacity-90"><i className="fa-solid fa-check"></i> Access to all premium tools</li>
                <li className="flex items-center gap-3 text-sm opacity-90"><i className="fa-solid fa-check"></i> Unlimited templates</li>
                <li className="flex items-center gap-3 text-sm opacity-90"><i className="fa-solid fa-check"></i> Priority support</li>
                <li className="flex items-center gap-3 text-sm opacity-90"><i className="fa-solid fa-check"></i> Unlimited projects</li>
                <li className="flex items-center gap-3 text-sm opacity-90"><i className="fa-solid fa-check"></i> Cloud sync</li>
                <li className="flex items-center gap-3 text-sm opacity-90"><i className="fa-solid fa-check"></i> Advanced analytics</li>
              </ul>
            </div>
            <button className="w-full bg-white text-[#7c3aed] py-4 rounded-2xl font-bold text-lg">Start Pro Trial</button>
          </div>

          {/* third card*/}
          <div className="bg-white p-10 rounded-[35px] border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-8">For teams and businesses</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-gray-900">$99</span>
                <span className="text-gray-400 text-lg font-medium">/Month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Everything in Pro</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Team collaboration</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Custom integrations</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Dedicated support</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> SLA guarantee</li>
                <li className="flex items-center gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-green-500"></i> Custom branding</li>
              </ul>
            </div>
            <button className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl font-bold text-lg">Contact Sales</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;