import React from "react";
import { FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";
import heroImage from "./assets/heroImage.jpg";

const Startup = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Content */}
      <div className="max-w-xl text-left space-y-5">
        <p className="text-orange-500 font-semibold text-lg">
          Welcome to
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1b1c4b] leading-tight">
          PlanThyBusiness, <br />
          a <span className="text-[#1b1c4b]">Startup</span> for{" "}
          <span className="relative inline-block">
            <span className="text-[#1b1c4b] font-bold">Startups</span>
            <span className="absolute inset-x-0 bottom-0 h-[6px] bg-orange-500 opacity-60 rounded-full"></span>
          </span>
        </h1>

        <p className="text-gray-600 text-base leading-relaxed">
          One-stop destination for all things startups need,
          simplifying your journey from idea to success.
        </p>

        <p className="text-gray-700 text-lg">
          Need ANY kind of <span className="text-orange-500 font-semibold">HELP</span> with your startup?
        </p>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <button className="bg-[#1b1c4b] hover:bg-[#2a2b6a] text-white px-8 py-3 rounded-full font-medium transition-all">
            Contact Now
          </button>

          {/* Contact Icons */}
          <div className="flex items-center gap-4 text-[#1b1c4b] text-xl">
            <FaPhoneAlt className="cursor-pointer hover:text-orange-500 transition" />
            <FaComments className="cursor-pointer hover:text-orange-500 transition" />
            <FaEnvelope className="cursor-pointer hover:text-orange-500 transition" />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#1b1c4b]">
            On-Demand <span className="font-bold">Operating System</span> for Startups
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            <div className="text-center">
              <p className="text-[#1b1c4b] font-medium">📘</p>
              <p className="font-semibold mt-1">Planning & Mentoring</p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-medium">📈</p>
              <p className="font-semibold mt-1">Launch & Growth</p>
            </div>
            <div className="text-center">
              <p className="text-[#1b1c4b] font-medium">📢</p>
              <p className="font-semibold mt-1">Pitch Readiness</p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-medium">💰</p>
              <p className="font-semibold mt-1">Fundraising</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-12 md:mt-0 md:w-[45%] flex justify-center">
        <div className="relative">
          <img
            src={heroImage}
            alt="Startup Hero"
            className="rounded-full shadow-xl w-[320px] md:w-[400px] object-cover"
          />

          {/* 1500+ Startups */}
          <div className="absolute top-10 right-0 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100">
            <p className="text-[#1b1c4b] font-bold text-lg">1500+</p>
            <p className="text-sm text-gray-500 -mt-1">Startups</p>
          </div>

          {/* Top-Notch Badge */}
          <div className="absolute bottom-10 left-0 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100">
            <p className="text-orange-500 font-bold">Top-Notch</p>
            <p className="text-sm text-gray-500 -mt-1">Consultants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;
