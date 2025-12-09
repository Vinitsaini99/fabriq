// src/components/Carousel/HomeFile.jsx

import Carousel from "react-bootstrap/Carousel";
import Product from "./product";

function ProductCarousel() {
  return (
    <div className="w-full h-[500px]  overflow-hidden"> 
      {/* Outer div with height + width */}

      <Carousel interval={3000} className="w-full h-full">

        {/* SLIDE 1 */}
        <Carousel.Item className="w-full h-full flex justify-center items-center">
          <Product img="/src/assets/13.jpg" />
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item className="w-full h-full flex justify-center items-center">
          <Product img="/src/assets/images.jpeg" />
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item className="w-full h-full flex justify-center items-center">
          <Product />
        </Carousel.Item>

      </Carousel>

    </div>
  );
}

export default ProductCarousel;
