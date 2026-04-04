"use client";

import { Facebook, Instagram, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#2f5d50] to-[#24493f] text-white  md:pt-32 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Jahnawi-School
          </h2>

          <p className="text-sm text-gray-200 leading-relaxed">
            Start your journey to academic success with guidance
            from leading professionals and innovative learning.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Twitter, Send].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -2 }}
                className="cursor-pointer bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            {["Home", "About us", "Pricing", "Blog", "Blog Details"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white hover:translate-x-1 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-semibold mb-4">Facilities</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            {["Freshers", "Courses", "New Events", "Contact"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white hover:translate-x-1 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>

          <p className="text-sm text-gray-200 mb-4">
            Get knowledge of the latest information & updates.
          </p>

          <div className="flex bg-white rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-white/40 transition">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 text-black w-full outline-none bg-transparent"
            />

            <button className="bg-[#1f3f36] px-5 hover:bg-[#18342d] transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">

        <p>© 2025 Jahnawi-School. All rights reserved</p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Terms of Service
          </span>
        </div>

      </div>
    </footer>
  );
}
