import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import Service from "./Service";

const Home = () => {
  const slides = [
    {
      image: slide3,
      title: "Digital Service",
      subtitle: "Simplify with Your Business",
      buttonText: "Get Started",
    },
    {
      image: slide1,
      title: "Start Your Business in India",
      subtitle: "Fast, Easy, and Online",
      buttonText: "Get Started",
    },
    {
      image: slide2,
      title: "File GST Returns with Ease",
      subtitle: "Accurate. Affordable. Hassle-Free.",
      buttonText: "File GST",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")
        goToSlide(current === 0 ? slides.length - 1 : current - 1);
      if (e.key === "ArrowRight")
        goToSlide(current === slides.length - 1 ? 0 : current + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  const goToSlide = (index) => setCurrent(index);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToSlide(current === slides.length - 1 ? 0 : current + 1),
    onSwipedRight: () => goToSlide(current === 0 ? slides.length - 1 : current - 1),
    trackMouse: true,
  });

  return (
    <>
      <div
        {...handlers}
        className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden mt-[70px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Smooth Blurred Background */}
        <motion.img
          key={current}
          src={slides[current].image}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110 transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/30 transition-all duration-1000 ease-in-out"></div>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex justify-center items-center px-4"
          >
            <motion.div className="relative w-full max-w-5xl h-[55vh] sm:h-[60vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6 sm:px-10 text-white">
                <motion.h2
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-5 bg-green-900/70 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg"
                >
                  {slides[current].title}
                </motion.h2>
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-base sm:text-lg md:text-xl mb-5 sm:mb-7 max-w-[90%] sm:max-w-2xl"
                >
                  {slides[current].subtitle}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-400 via-yellow-300 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:from-yellow-400 hover:via-green-400 hover:to-yellow-300 transition-all duration-300"
                >
                  {slides[current].buttonText}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow navigation */}
        <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2 text-white">
          <button
            onClick={() => goToSlide(current === 0 ? slides.length - 1 : current - 1)}
            className="p-3 bg-black/50 rounded-full hover:bg-black/70 shadow-lg transition-all duration-300"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            onClick={() => goToSlide(current === slides.length - 1 ? 0 : current + 1)}
            className="p-3 bg-black/50 rounded-full hover:bg-black/70 shadow-lg transition-all duration-300"
          >
            <FaChevronRight size={22} />
          </button>
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 ${
                index === current
                  ? "text-yellow-400 shadow-lg"
                  : "text-gray-400 hover:text-yellow-300"
              }`}
            >
              <FaCircle size={12} />
            </motion.button>
          ))}
        </div>
      </div>
      <Service />
    </>
  );
};

export default Home;
