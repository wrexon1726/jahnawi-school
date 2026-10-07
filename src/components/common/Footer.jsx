"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Send, GraduationCap, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Admissions (LKG - Gr 8)", href: "/admissions" },
  { name: "Curriculum & Academics", href: "/academics" },
  { name: "School Activities", href: "/activityevent" },
  { name: "Latest Announcements", href: "/news" },
  { name: "Contact Campus", href: "/contact" },
];

const facilitiesLinks = [
  { name: "STEM & Robotics Lab", href: "#" },
  { name: "Sports Arena & Turf", href: "#" },
  { name: "Smart Digital Classrooms", href: "#" },
  { name: "GPS-Tracked Bus Transport", href: "#" },
  { name: "Supervised Hostel & Dining", href: "#" },
  { name: "Art & Performing Theater", href: "#" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Send, label: "Telegram", href: "https://telegram.org" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#254d41] via-[#1f4238] to-[#152e26] text-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

          {/* Column 1: School Identity & Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Unified Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-bold text-lg tracking-tight group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-[#2f5d50] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                <GraduationCap size={18} strokeWidth={2.2} />
              </div>
              <span className="font-extrabold tracking-tight text-white">
                Jahnawi<span className="text-emerald-300">School</span>
              </span>
            </Link>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Nurturing young minds from LKG to Grade 8 with creativity, moral values, modern experiential learning, and dedicated faculty care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-transform duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Campus Facilities (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Campus Facilities
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {facilitiesLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-transform duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Updates (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              School Dispatch
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              Subscribe for term dates, exam notifications, and admission circulars.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex flex-col gap-2.5"
            >
              <div className="relative flex items-center">
                <Mail size={16} className="absolute left-3.5 text-white/50 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Parent's email address"
                  className="w-full bg-white/10 border border-white/15 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#2f5d50] py-2.5 px-5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:bg-slate-100 transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Subscribe to Circulars</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Jahnawi School. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Safety Guidelines
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}