import React, { useState } from 'react';
import Logo from '../assets/market-logo.jpeg';
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';
import Optionselling from '../pages/Optionselling';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="text-white max-w-[1320px] mx-auto">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="#" className="block font-semibold hover:text-gray-300">
            <img src={Logo} alt="Logo" className="w-[89px]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="font-semibold hover:text-gray-300 flex items-center gap-1 cursor-pointer"
              >
                Courses
                <svg
                  className="w-4 h-4 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 z-20">
                  <a href="#Courses"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Courses</li></a>
                  <Link to="/Optionselling"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option Selling</li></Link>
                </ul>
              )}
            </div>

            {/* Other Links */}
            <a href="#instructors" className="font-semibold hover:text-gray-300">Instructors</a>
            <Link to="/contact" className="font-semibold hover:text-gray-300">Contact us</Link>

            
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black px-4 pb-4 space-y-2">
            {/* Courses Dropdown for Mobile */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left font-semibold hover:text-gray-300 flex justify-between items-center"
              >
                Courses
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="mt-2 bg-white text-black rounded-md shadow-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Courses</li>
                  <Link to="/Optionselling"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option Selling</li></Link>
                </ul>
              )}
            </div>

            {/* Other Links */}
            <a href="#instructors" className="block font-semibold hover:text-gray-300">Instructors</a>
            <a href="/Pages/Contact" className="block font-semibold hover:text-gray-300">Instructors</a>
            <Link to="../pages/Contact" className="block font-semibold hover:text-gray-300">Contact us</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
