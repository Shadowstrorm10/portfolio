"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white bg-opacity-90 shadow-2xl fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-800 transition duration-300">
            <Link href="/">Sheril Dh.</Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-lg text-gray-800 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-lg text-gray-800 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="text-lg text-gray-800 transition duration-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transition-all duration-300 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-center space-y-6 pt-12">
          <Link href="/" className="text-xl text-gray-800 transition duration-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-xl text-gray-800 transition duration-300" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" className="text-xl text-gray-800 transition duration-300" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
