import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import Home from "./Home";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">
        {/* Logo */}
        <div className="flex items-center gap-2 h-16 cursor-pointer">
          <img 
            src={logo}
            alt="Creation Alliance"
            className="w-32 h-auto scale-110" // increased size slightly
          />
        </div>

        {/* Main Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Startup</li>

          {/* Registrations Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Registrations <FaChevronDown size={12} />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-[460px]">
              <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                <div className="flex flex-col gap-2">
                  <span className="hover:text-blue-600 cursor-pointer">Proprietorship</span>
                  <span className="hover:text-blue-600 cursor-pointer">Partnership</span>
                  <span className="hover:text-blue-600 cursor-pointer">One Person Company</span>
                  <span className="hover:text-blue-600 cursor-pointer">Limited Liability Partnership</span>
                  <span className="hover:text-blue-600 cursor-pointer">Private Limited Company</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="hover:text-blue-600 cursor-pointer">Section 8 Company</span>
                  <span className="hover:text-blue-600 cursor-pointer">Trust Registration</span>
                  <span className="hover:text-blue-600 cursor-pointer">Public Limited Company</span>
                  <span className="hover:text-blue-600 cursor-pointer">Producer Company</span>
                  <span className="hover:text-blue-600 cursor-pointer">Indian Subsidiary</span>
                </div>
              </div>
            </div>
          </li>

          <li className="hover:text-blue-600 cursor-pointer">Trademark</li>
          <li className="hover:text-blue-600 cursor-pointer">GST</li>
          <li className="hover:text-blue-600 cursor-pointer"> Digital Service</li>
          
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-gray-700 hover:text-blue-600 text-sm">Login</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-3 text-gray-700 font-medium">
          <span>Startup</span>
          <span>Registrations</span>
          <span>Trademark</span>
          <span>GST</span>
          <span>Digital Service</span>
          
          <div className="flex gap-4 pt-3 border-t">
            <button className="text-gray-700">Login</button>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
    <Home />
    </>
  );
};

export default Navbar;
