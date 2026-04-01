import React from 'react';

// image shob gular import
import writingIcon from '../assets/products/writing_2327400 1.png';
import designIcon from '../assets/products/design-tool.png';
import shoppingIcon from '../assets/products/shopping-cart.png';
import operationIcon from '../assets/products/operation.png';
import portfolioIcon from '../assets/products/portfolio.png';
import socialIcon from '../assets/products/social-media.png';

const ProductCard = ({ product, onAdd, cart }) => {
  
  const imageMap = {
    "writing_2327400 1.png": writingIcon,
     "design-tool.png": designIcon,
      "shopping-cart.png": shoppingIcon,
    "operation.png": operationIcon,
    "portfolio.png": portfolioIcon,
    "social-media.png": socialIcon
  };

  // cart a ache naki
  const isAdded = cart.some(item => item.id === product.id);

  return (
    <div className="bg-white p-7 rounded-[32px] border border-gray-100 shadwo-sm relative flex flex-col justify-between singel-card">
      
      {/* kunay lekha gula cart er */}
      {product.badge && (
        <div className="cmnt-right-corner absolute top-5 right-5">
          <span className={`text-[11px] font-bold px-4 py-1.5 rounded-full badge-txt
            ${product.badge === 'Best Seller' ? 'bg-[#fef3c7] text-[#92400e]' : ''} 
            ${product.badge === 'Popular' ? 'bg-[#f3f0ff] text-[#7c3aed]' : ''} 
            ${product.badge === 'New' ? 'bg-[#dcfce7] text-[#166534]' : ''}`
          }>
            {product.badge}
          </span>
        </div>
      )}

      <div>

        {/* cart imag left corner */}
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 icon-warp">
          <img 
            src={imageMap[product.image]} 
            className="w-9 h-9 object-contain" 
          />
        </div>


        <h3 className="text-2xl font-extrabold text-gray-900 mb-2.5">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex items-baseline gap-1 mb-8 prizing-row">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-sm font-medium">/{product.type}</span>
        </div>

        {/* Feature der List */}
        <ul className="space-y-4 mb-10 feature-list">
          {product.fetures.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
              <i className="fa-solid fa-check text-green-500"></i> {f}
            </li>
          ))}
        </ul>
      </div>

      {/* buy now change to added */}
      <button 
        onClick={() => !isAdded && onAdd(product)} 
        className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#6d28d9] transition-all active:scale-95 buy-now-btn"
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;