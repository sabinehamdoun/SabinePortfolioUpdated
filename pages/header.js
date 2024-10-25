"use client"; // Required for Next.js client component
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-purple-50 py-10 px-10 md:px-24 flex justify-between items-center text-lg font-semibold">
        <div className="text-2xl">Sabine Hamdoun</div>

        <button className="md:hidden flex items-center" onClick={toggleMenu}>
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden md:flex ml-auto">
          <ul className="flex gap-10">
            <li>
              <a
                href="#banner"
                className="relative after:content-[''] after:block after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:w-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative after:content-[''] after:block after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full after:w-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative after:content-[''] after:block after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:w-0"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-purple-100 flex justify-center py-3">
          <ul className="flex flex-col gap-5 font-semibold">
            <li>
              <a href="#banner" className="block px-4 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-4 py-2">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="block px-4 py-2">
                Skills
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
