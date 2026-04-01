import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* footer all colum */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* footer left part */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tight">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* product list */}
          <div>
            <h4 className="font-bold mb-6 text-gray-200">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Features</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Templates</li>
              <li className="hover:text-white transition-colors cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* company lst */}
          <div>
            <h4 className="font-bold mb-6 text-gray-200">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Press</li>
            </ul>
          </div>

          {/* resources r social r icon */}
          <div>
            <h4 className="font-bold mb-6 text-gray-200">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Community</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
            
            
            <h4 className="font-bold mb-5 text-gray-200">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-9 h-9 bg-white text-[#0f172a] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
                <i className="fa-brands fa-instagram text-lg"></i>
              </div>
              <div className="w-9 h-9 bg-white text-[#0f172a] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </div>
              <div className="w-9 h-9 bg-white text-[#0f172a] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </div>
            </div>
          </div>

        </div>

        {/* akdom bottom footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;