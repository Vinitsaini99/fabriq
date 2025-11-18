// ProductShowcase.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product from "/src/components/Carousel/Product/product";

// import your images (adjust the paths if needed)
import img1 from "/src/assets/13.jpg";
import img2 from "/src/assets/13.jpg"; 
import img3 from "/src/assets/13.jpg";
import img4 from "/src/assets/13.jpg";
import img5 from "/src/assets/13.jpg";
import img6 from "/src/assets/13.jpg";
import img7 from "/src/assets/13.jpg";

const items = [
  { img: img1, title: "Olive Green Embroidered", desc: "Short description..." },
  { img: img2, title: "Crimson Draped Saree", desc: "Short description..." },
  { img: img3, title: "Product 3", desc: "Short description..." },
  { img: img4, title: "Product 4", desc: "Short description..." },
  { img: img5, title: "Product 5", desc: "Short description..." },
  { img: img6, title: "Product 6", desc: "Short description..." },
  { img: img7, title: "Product 7", desc: "Short description..." },
];

export default function ProductShowcase() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ padding: "0 40px" }}
        breakpoints={{
          // responsive: change # slides per view on different widths
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {items.map((it, i) => (
          <SwiperSlide key={i}>
            <div className="px-2">
              <Product img={it.img} title={it.title} desc={it.desc} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
