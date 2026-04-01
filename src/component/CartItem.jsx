

import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-5 rounded-3xl mb-4 cart-row-item">
      <div className="flex items-center gap-5">
        {/* img contaimer */}
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm img-box-warp">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-contain" 
          />
        </div>
        
        <div className="item-details">
          <h4 className="font-extrabold text-gray-900 text-lg leading-tight">{item.name}</h4>
          <p className="text-gray-400 text-sm font-semibold">${item.price}</p>
        </div>
      </div>

      {/* remve button er logic */}
      <button 
        onClick={() => onRemove(item.id)}
        className="text-[#ff4d4d] font-bold text-sm hover:underline transition-all remve-btn"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;