"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About Us", "Courses", "Pages", "Contact Us"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#2f5d50]/90 backdrop-blur shadow-md"
          : "bg-[#2f5d50]"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 text-white max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg cursor-pointer">
          <span className="bg-white w-6 h-6 rounded-sm"></span>
          Jahnawi-School
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">

          {navLinks.map((link, index) => (
            <a
              key={index}
              className="relative cursor-pointer group"
            >
              {link}

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* Contact Button */}
        <button className="hidden md:block bg-white text-[#2f5d50] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
          +1 987 654 32 10
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#2f5d50] px-6 pb-6 space-y-4 text-white">

          {navLinks.map((link, index) => (
            <p
              key={index}
              className="border-b border-white/20 pb-2 cursor-pointer"
            >
              {link}
            </p>
          ))}

          <button className="w-full bg-white text-[#2f5d50] py-2 rounded-full mt-4">
            +1 987 654 32 10
          </button>

        </div>
      )}
    </header>
  );
};

export default Header;
