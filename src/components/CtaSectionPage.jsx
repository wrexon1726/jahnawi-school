"use client";

import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="bg-slate-50/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2f5d50] via-[#285246] to-[#1d3d34] text-white px-6 py-14 sm:py-20 sm:px-12 text-center shadow-2xl"
        >

          {/* Ambient Decorative Glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl" />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 text-white/95 text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm mb-6">
            <Sparkles size={14} className="text-white/80" />
            <span>Admissions Open for 2025–26</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] max-w-2xl mx-auto">
            Begin Your Child’s Journey Toward a Brighter Future
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Join a supportive school family focused on foundational excellence, creative discovery, and lifelong confidence from LKG to Grade 8.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-white text-[#2f5d50] px-7 py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-slate-100 transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Enroll Now
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <PhoneCall size={15} />
              Book a Campus Visit
            </button>
          </div>

          {/* Micro Trust Note */}
          <p className="mt-6 text-xs text-white/60 tracking-wide">
            Limited seats available per class to ensure personalized attention.
          </p>

        </motion.div>

      </div>
    </section>
  );
}