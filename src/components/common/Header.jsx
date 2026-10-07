"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Activities & Events", path: "/activityevent" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#2f5d50]/95 backdrop-blur-md shadow-md border-b border-white/10 py-3.5"
            : "bg-[#2f5d50] py-5"
        }
      `}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-white text-[#2f5d50] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
            <GraduationCap size={18} strokeWidth={2.2} />
          </div>
          <span className="font-extrabold tracking-tight text-white group-hover:text-white/90 transition-colors">
            Jahnawi<span className="text-emerald-300">School</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative py-1 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded"
            >
              {link.name}
              {/* Smooth hover indicator */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-300 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+19876543210"
            className="inline-flex items-center gap-2 bg-white text-[#2f5d50] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/90 shadow-xs transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <Phone size={14} className="text-[#2f5d50]" />
            <span>+1 (987) 654-3210</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#285044] border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto px-5 py-6 space-y-4 text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-sm font-medium py-2.5 border-b border-white/10 text-white/90 hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={14} className="text-white/40" />
                </Link>
              ))}

              <div className="pt-2">
                <a
                  href="tel:+19876543210"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#2f5d50] py-3 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-all"
                >
                  <Phone size={15} />
                  <span>Call Admissions: +1 (987) 654-3210</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}