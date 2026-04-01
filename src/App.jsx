// import Banner from "./component/Banner"
// import NavBar from "./component/NavBar"
// // import ProductSecion from "./component/ProductSection"
// import SectionBlue from "./component/SectionBlue"

// function App() {

//   return (
//     <>
//       <NavBar></NavBar>
//       <Banner></Banner>
//       <SectionBlue></SectionBlue>
      
    
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";
import SectionBlue from "./component/SectionBlue";
import ProductCard from './component/ProductCard';
import CartItem from './component/CartItem';
import StepsSection from './component/StepsSection';
import PricingSection from './component/PricingSection';
import WorkflowSection from './component/WorkflowSection';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // json data kaj

     useEffect(() => {
       fetch('./products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => console.log("data load error", err));
  }, []);

  const handleAddToCart = (item) => {
    setLoading(true);
    setTimeout(() => {
      setCart([...cart, item]);
      setLoading(false);
    }, 800); 
  };

  const handleRemove = (id) => {
    const remaining = cart.filter(p => p.id !== id);
    setCart(remaining);
  };

  return (
    <>
      {/* count pass korsi navbar e */}
      <NavBar count={cart.length}></NavBar>

      <Banner></Banner>
      <SectionBlue></SectionBlue>
      

      {/* Product r Cart Secion */}
      <div className="max-w-7xl mx-auto px-6 py-16 prduct-sec-warp">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Premium Digital Tools</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm">Choose from our curated collection of premium products.</p>
          
          
    {/* button working  */}
          <div className="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-100 tab-box-warp">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'products' ? 'bg-[#7c3aed] text-white shadow-md' : 'text-gray-500'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'cart' ? 'bg-[#7c3aed] text-white shadow-md' : 'text-gray-500'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Loading Spin code akhane */}
        {loading && (
          <div className="flex justify-center my-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7c3aed]"></div>
          </div>
        )}

        {/* Product Grid looking */}
        {!loading && activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 main-grid-warp">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} cart={cart} />
            ))}
          </div>
        )}

        {/* Cart Row looking */}
        {!loading && activeTab === 'cart' && (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-[35px] border border-gray-100 shadow-sm cart-main-box">
            <h3 className="text-xl font-bold mb-6">Your Cart</h3>
            {cart.length > 0 ? (
              <>
                <div className="cart-list-flow">
                  {cart.map((item, idx) => (
                    <CartItem key={idx} item={item} onRemove={handleRemove} />
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t flex justify-between items-center mb-6 total-sum-box">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-2xl font-bold">${cart.reduce((s, i) => s + i.price, 0)}</span>
                </div>
                <button className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl font-bold text-lg checkout-btn-style">
                  Proceed To Checkout
                </button>
              </>
            ) : (
              <p className="text-center py-10 text-gray-400 font-medium">Your cart is emty!</p>
            )}
          </div>
        )}
      </div>


      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <WorkflowSection/>
    </>
    
  );
}

export default App;