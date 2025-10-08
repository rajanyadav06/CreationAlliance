import React from "react";
import { FaLinkedin, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0e0b12] text-white pt-12 pb-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
           The Most  Business Professionals{" "}
          <span className="text-yellow-400">Trusted</span> and{" "}
          <span className="text-sky-400">Registration</span>.
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* Contact */}
          <div>
            <img
                src={logo}
                alt="Creation Alliance"
                className="w-32 sm:w-36 h-auto object-contain bg-white rounded-2xl mb-4 flex bg-center"
             />
              
            <p>Contact Us: +91 93117 33380</p>
            <p className="mt-1 text-sm">
              Address -A-88 Sector 4 noida 201301 Uttar Pradesh India
            </p>
            <div className="flex items-center gap-2 mt-2">
              <MdEmail className="text-xl" />
              <p className="text-sm">support@thecreatengo.com</p>
            </div>
    
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-pink-400 inline-block pb-1">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 flex flex-col">
              <Link to="about" className="hover:text-blue-400 transition" >About</Link>
              <Link to="contact-us" className="hover:text-blue-400 transition">Contact</Link>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-pink-400 inline-block pb-1">
              Service
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 flex flex-col ">
              <Link to="strartup" className=" hover:text-blue-400 transition">Startup</Link>
              <Link to="registration" className=" hover:text-blue-400 transition">Registrations</Link>
              <Link to="trademark" className=" hover:text-blue-400 transition">Trademark</Link>
              <Link to="digital-service" className=" hover:text-blue-400 transition">Digital Service</Link>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-pink-400 inline-block pb-1">
              Follow Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-xl" />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaYoutube className="text-xl" />
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaTelegramPlane className="text-xl" />
                <a href="https://t.me" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
          <p>© 2025 Rajan Yadav. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
