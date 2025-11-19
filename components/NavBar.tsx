"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="shrink-0">
          <Image 
            src="/colab.svg" 
            alt="Logo" 
            width={200} 
            height={60} 
            className="w-40 h-auto md:w-55 md:h-15" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 px-4">
          <a href="/" className="text-[#00406E] font-normal hover:font-semibold transition-all">
            Home
          </a>
          <a href="#our-services" className="text-[#00406E] font-normal hover:font-semibold transition-all">
            Services
          </a>
          <a href="/product" className="text-[#00406E] font-normal hover:font-semibold transition-all">
            Products
          </a>
          <a href="/about" className="text-[#00406E] font-normal hover:font-semibold transition-all">
            About
          </a>
          <a href="#contact-us" className="text-[#00406E] font-normal hover:font-semibold transition-all">
            Contact us
          </a>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#00406E] p-2"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70"
            onClick={closeMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 w-full max-w-sm h-full bg-white shadow-xl">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Image 
                  src="/colab.svg" 
                  alt="Logo" 
                  width={150} 
                  height={45} 
                  className="w-32 h-auto" 
                />
              </div>
              <button
                onClick={closeMenu}
                className="text-[#00406E] p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-4 py-6">
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#00406E] font-normal py-3 px-2 border-b border-gray-100 hover:font-semibold transition-all"
              >
                Home
              </a>
              <a
                href="#our-services"
                onClick={closeMenu}
                className="text-[#00406E] font-normal py-3 px-2 border-b border-gray-100 hover:font-semibold transition-all"
              >
                Services
              </a>
              <a
                href="/product"
                onClick={closeMenu}
                className="text-[#00406E] font-normal py-3 px-2 border-b border-gray-100 hover:font-semibold transition-all"
              >
                Products
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="text-[#00406E] font-normal py-3 px-2 border-b border-gray-100 hover:font-semibold transition-all"
              >
                About
              </a>
              <a
                href="#contact-us"
                onClick={closeMenu}
                className="text-[#00406E] font-normal py-3 px-2 border-b border-gray-100 hover:font-semibold transition-all"
              >
                Contact us
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

