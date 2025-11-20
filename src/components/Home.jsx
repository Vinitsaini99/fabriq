import React from 'react'

import ProductCarousel from './Carousel/Product/ProductCarousel';
import ProductShowcase from './Carousel/Product/ProductShowcase';

const Home = () => {
  return (
    <>
      {/* FIXED: removed large margin m-10 */}
      <div className='flex justify-center items-center gap-6 mt-1 mb-1'>
        <ProductCarousel/>
      </div>

      {/* FIXED: my-8 removed — now much smaller space */}
      <h1 
        className="text-3xl font-bold text-center mt-1 mb-4 !text-purple-600"
        style={{ textShadow: "2px 2px 6px rgba(128, 0, 128, 0.5)" }}
      >
        Best selling Products
      </h1>

      <div className="mt-0 pt-0">
        <ProductShowcase/>
      </div>
      
    </>
  )
}

export default Home;
