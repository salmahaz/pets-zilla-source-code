'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure you have lucide-react installed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/pets-zilla.png"
            alt="Pet Zilla Logo"
            width={65}
            height={65}
          />
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6 font-medium">
              {["Home", "About", "Services", "Blogs", "Clients"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="text-gray-800 hover:text-[#7ac7fb] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="tel:+971502594745"
            className="bg-[#7ac7fb] text-white px-4 py-2 rounded-lg hover:bg-[#65baf1] transition-colors duration-200 font-semibold"
          >
            +971 (50) 259 4745
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4 flex flex-col gap-4">
          <nav>
            <ul className="space-y-4 font-medium">
              {["Home", "About", "Services", "Blogs", "Clients"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="block text-gray-800 hover:text-[#7ac7fb] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:+971502594745"
            className="inline-block w-full bg-[#7ac7fb] text-white px-4 py-2 rounded-lg text-center hover:bg-[#65baf1] transition-colors duration-200 font-semibold"
          >
            +971 (50) 259 4745
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
