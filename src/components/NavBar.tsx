"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome, FaUserAlt, FaBlog, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-500 body-font shadow-lg">
      <div className="bg-zinc-900 container mx-auto flex flex-wrap p-2 flex-col md:flex-row">
        <h1 className="text-3xl font-bold text-white mr-auto hover:text-red-600">
          Exploring Horizons
        </h1>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden ml-auto focus:outline-none"
        >
          {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          }  md:flex md:ml-auto items-center space-y-4 md:space-y-0 flex-col md:flex-row text-white`}
        >
          <Link
            href="/"
            className="flex items-center mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            <FaUserAlt className="mr-2" />
            About
          </Link>
          <Link
            href="/blog"
            className="flex items-center mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            <FaBlog className="mr-2" />
            Blog
          </Link>
          <Link
            href="/contact"
            className="flex items-center mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}