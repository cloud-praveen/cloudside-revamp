import React, { useState } from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <span className="text-xl md:text-2xl font-semibold">
                <span className="text-gray-700">cloud</span>
                <span className="text-orange-500">side</span>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#solutions"
              className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1"
            >
              SOLUTIONS
            </a>
            <a
              href="#industries"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              INDUSTRIES
            </a>
            <a
              href="#resources"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              RESOURCES
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ABOUT US
            </a>
            <a
              href="#careers"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              CAREERS
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
