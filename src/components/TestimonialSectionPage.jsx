"use client";

import Image from "next/image";
import { Star, Quote, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Dheeraj Shrivastava",
    role: "Parent of Grade 4 Student",
    text: "We are proud to be part of Jahnawi School. The teachers truly care about each child’s personal growth, moral values, and day-to-day happiness.",
    image: "",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunny Kurmi",
    role: "Parent of Grade 2 Student",
    text: "My son has become remarkably more confident and articulate thanks to the interactive, curiosity-first classroom environment.",
    image: "",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohd Wali",
    role: "Parent of Grade 6 Student",
    text: "The school feels like an extended home for our children — safe, nurturing, disciplined, and packed with practical learning opportunities.",
    image: "",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikash Sharma",
    role: "Parent of UKG Student",
    text: "From early learning foundation to middle school, their balance of academic rigor and creative arts is truly exceptional.",
    image: "",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2f5d50]/10 text-[#2f5d50] text-xs sm:text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-full border border-[#2f5d50]/15 mb-4">
            <HeartHandshake size={14} className="text-[#2f5d50]" />
            <span>Parent Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Voices From Our School Family
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Discover how our nurturing environment and dedicated educators leave a lasting impact on young learners and their families.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">

          {/* Featured / Highlight Card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="relative lg:row-span-2 bg-gradient-to-br from-[#2f5d50] to-[#21433a] text-white p-7 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Decorative subtle background quote */}
            <Quote
              size={120}
              className="absolute -top-4 -right-4 text-white/5 pointer-events-none rotate-180"
            />

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-300 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-white/95">
                “Enrolling our daughter at Jahnawi School was the best decision for her early years. The holistic focus on science labs, arts, and character building has helped her thrive with genuine joy.”
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3.5 pt-8 mt-6 border-t border-white/15">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-sm">
                <Image
                  src=""
                  alt="Pooja & Rakesh Verma"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">
                  Pooja & Rakesh Verma
                </p>
                <p className="text-xs text-white/70">
                  Parents of Grade 3 Student
                </p>
              </div>
            </div>
          </motion.article>

          {/* Standard Parent Testimonial Cards */}
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                  “{item.text}”
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-5 mt-5 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}