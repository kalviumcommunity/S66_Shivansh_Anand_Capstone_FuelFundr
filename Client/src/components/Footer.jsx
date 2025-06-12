import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Navigation Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Explore</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Signals */}
          {/* <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Secure Payments
            </h4>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-3 items-center">
                <FaCcVisa className="w-6 h-6 text-gray-400" />
                <FaCcMastercard className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-gray-400 text-sm font-semibold">
                Razorpay
              </span>
            </div>
          </div> */}

          {/* Top Campaigns */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Top Campaigns
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Project Alpha
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Startup Beta
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  Creator Gamma
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Get the latest campaign updates and news.
            </p>
            <div className="flex flex-wrap gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 w-full sm:w-auto flex-1 px-3 sm:px-4 py-2 rounded-l-lg bg-gray-800 text-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-4 py-2 bg-amber-500 text-white rounded-r-lg hover:bg-amber-600 transition-colors duration-200 min-w-[100px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Platform Name */}
        <div className="text-center mt-6 sm:mt-8 overflow-hidden">
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-wider w-[90%] mx-auto text-shadow-lg">
            FUELFUNDR
          </h1>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} FuelFundr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
