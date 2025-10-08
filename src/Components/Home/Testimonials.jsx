import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Founder",
    company: "Studification",
    title: "One of the best business planning company",
    rating: 5,
    message:
      "They are one of the best business planning companies. They have a very humble and efficient team.",
  },
  {
    name: "CEO",
    company: "Express Loans",
    title: "He put his heart into it",
    rating: 5,
    message:
      "Did a superb job beyond my expectations. He put his heart into it like he’s doing his own project. Very thoughtful, passionate, respectful, and professional gentleman, I must say.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className="bg-[#f5f9ff] py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-indigo-100 text-indigo-700 font-semibold px-6 py-1 rounded-full mb-4 text-sm tracking-wide uppercase">
            ❤️ Customer Love
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our Happy Clients <span className="text-indigo-600">Say About Us</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Over the past 8 years, we've navigated challenges and stood tall —
            thanks to the loyalty, trust, and love of our amazing customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Globe with avatars */}
          <div className="relative flex justify-center">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
              alt="Global clients"
              className="w-80 h-80 object-contain opacity-90"
            />
            {/* Floating avatars */}
            <div className="absolute top-6 left-10 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-10 right-16 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-16 left-8 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-8 right-10 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="https://randomuser.me/api/portraits/women/15.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-2xl shadow-lg text-left border border-gray-100"
              >
                <div className="text-indigo-500 text-4xl mb-4">
                  <FaQuoteLeft />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {testimonial.title}
                </h3>

                <div className="flex space-x-1 text-yellow-400 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">{testimonial.message}</p>

                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Manual Controls */}
            <div className="absolute -top-10 right-0 flex space-x-3">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-indigo-100 transition"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-indigo-100 transition"
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-10 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
};

export default Testimonials;
