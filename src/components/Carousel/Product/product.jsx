import React from "react";


export default function Product({ img }) {
   
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={img}
        alt="product"
        className="
          w-[300px] 
          h-[450px] 
          object-cover 
          rounded-xl
          transition-all duration-700 ease-in-out
          hover:scale-[1.12] 
          hover:-translate-y-2
          hover:brightness-110 
          hover:shadow-xl 
          hover:shadow-black/30
        "
      />
    </div>
  );
}
