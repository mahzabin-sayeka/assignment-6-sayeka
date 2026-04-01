import React from 'react';

const WorkflowSection = () => {
  return (
    <section className="bg-[#7c3aed] py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* headingg*/}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-purple-100 text-lg mb-10 opacity-90">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>

        {/* button duita */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-white text-[#7c3aed] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
          <button className="bg-transparent text-white border border-white/40 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            View Pricing
          </button>
        </div>

        {/* akdom bottom line */}
        <p className="text-purple-200 text-sm font-medium">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default WorkflowSection;