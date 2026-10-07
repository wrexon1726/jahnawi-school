"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >

          {/* Consistent Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2f5d50]/10 text-[#2f5d50] text-xs sm:text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-full border border-[#2f5d50]/15 mb-6">
            <Sparkles size={14} className="text-[#2f5d50]" />
            <span>Nurturing Excellence & Creativity</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Nurturing Young Minds from{" "}
            <span className="text-[#2f5d50]">LKG to Grade 8</span> at Jahnawi School
          </h1>

          {/* Supporting Subtext */}
          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            Building strong foundations with creativity, innovation, and holistic learning to empower students for a confident, bright future.
          </p>

          {/* Call to Actions (Consistent with News section buttons) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-[#2f5d50] text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-md hover:bg-[#24493f] transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2f5d50]"
            >
              Admissions Open
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-200 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
            >
              Explore School
            </button>
          </div>

          {/* Proof / Stats Bar */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-gray-200/80 w-full max-w-lg">
            
            {/* Stat 1 */}
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                100%
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">
                8th Board Pass Rate
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="h-10 w-px bg-gray-200" />

            {/* Stat 2: Student Avatars + Rating */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center -space-x-2.5">
                {[1, 2, 3, 4].map((id) => (
                  <img
                    key={id}
                    src={`${id + 10}`}
                    alt="Student avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                <div className="flex text-amber-500">
                  <Star size={12} fill="currentColor" />
                </div>
                <span>300+ Happy Students</span>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Right Column: Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >

          {/* Main Campus Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-md w-full aspect-4/5">
            <Image
              src="/images/im3.jpeg"
              alt="Jahnawi School Campus"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Consistent Floating Glass Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 max-w-xs"
          >
            <div className="relative w-32 h-26 shrink-0 rounded-xl overflow-hidden">
              <Image
                src="/images/im8.jpeg"
                alt="Student Activity"
                fill
                className="object-fit"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2f5d50] uppercase tracking-wider">
                Holistic Growth
              </p>
              <p className="text-sm sm:text-sm font-bold text-gray-900 mt-0.5 leading-snug">
                Sports, Arts & Tech Labs
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}