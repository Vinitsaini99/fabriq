// src/components/Carousel/HomeFile.jsx

import Carousel from "react-bootstrap/Carousel";

function HomeFile() {
  return (
    <div className="w-full h-[500px] bg-purple-700 overflow-hidden"> 
      {/* Outer div with height + width */}

      <Carousel interval={3000} className="w-full h-full">
        
        {/* SLIDE 1 */}
        <Carousel.Item className="w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="h-full object-contain mx-auto"
              src="/src/assets/13.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item className="w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="h-full object-contain mx-auto"
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtKk17M76ivVeU38rpxdz_8QQIncKhsOLqSWQioqohAWwtvpG5Ktr6Gj9ioO8EIBdXVBR7-3DEgu0D4ii09pQqYXwr-c0GhWcEW_Dympbjsbmx-ojbk22d"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item className="w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="h-full object-contain mx-auto"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>

      </Carousel>

    </div>
  );
}

export default HomeFile;
