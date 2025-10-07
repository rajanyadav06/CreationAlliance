import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import Startup from "./Startup/Startup";

const Home = () => {
  const slides = [
    {
      image: slide1,
      title: "TDS Filing & Form 16 Issuance",
      subtitle: "Simplify with IndiaFilings",
    },
    {
      image: slide2,
      title: "Start Your Business in India",
      subtitle: "Fast, Easy, and Online",
    },
    {
      image: slide3,
      title: "File GST Returns with Ease",
      subtitle: "Accurate. Affordable. Hassle-Free.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 5 seconds (pause on hover)
  useEffect(() => {
    if (isHovered) return; // stop timer when hovered
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isHovered]);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <>
    <div
      className="relative w-full h-screen overflow-hidden mt-[75px] rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Background Image with smooth zoom on hover */}
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transform transition-transform duration-1000 ${
              isHovered && index === current ? "scale-110" : "scale-100"
            }`}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Text overlay */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold bg-green-900 bg-opacity-80 px-6 py-3 rounded-lg inline-block">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl mt-2">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-300"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-300"
      >
        <FaChevronRight className="text-gray-700" />
      </button>
    </div>
    <Startup />
    </> 
  );
};

export default Home;
