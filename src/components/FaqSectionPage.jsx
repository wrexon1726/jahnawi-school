"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What classes and curriculum are offered at Jahnawi School?",
    answer:
      "We provide comprehensive, holistic schooling from LKG through Grade 8, combining rigorous foundational academics with creative arts, science labs, and sports education.",
  },
  {
    question: "How can parents apply for admission?",
    answer:
      "Admissions can be initiated through our online inquiry form or by visiting our campus admissions desk directly. A brief interaction with the student and parents follows.",
  },
  {
    question: "Are scholarships or fee concessions available?",
    answer:
      "Yes, we offer merit-based academic concessions as well as need-based financial aid programs evaluated annually by the school board.",
  },
  {
    question: "Does the school provide safe transport and hostel facilities?",
    answer:
      "Yes, we maintain a fleet of GPS-tracked school buses covering major local routes, along with clean, 24/7 supervised residential hostel facilities for boarding students.",
  },
  {
    question: "What co-curricular and sports activities are available?",
    answer:
      "Students participate in regular sports (football, badminton, track), music, dance, public speaking clubs, and hands-on STEM project labs.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0); // Open the first item by default for better initial engagement

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-slate-50/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2f5d50]/10 text-[#2f5d50] text-xs sm:text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-full border border-[#2f5d50]/15 mb-4">
            <HelpCircle size={14} className="text-[#2f5d50]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Everything you need to know about admissions, daily campus life, and our student facilities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Campus Image Frame (consistent with Hero styling) */}
            <div className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/images/im11.jpeg"
                alt="Students learning at Jahnawi School"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Campus Support
                </p>
                <p className="text-lg font-bold mt-1">
                  Dedicated counseling for prospective families
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2f5d50]/10 flex items-center justify-center text-[#2f5d50] shrink-0">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Have more questions?
                  </p>
                  <p className="text-xs text-gray-500">
                    Speak with our admissions counselor
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2f5d50] hover:text-[#24493f] px-3 py-2 rounded-full hover:bg-slate-50 transition-colors"
              >
                Contact
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-7 space-y-3.5" role="region" aria-label="FAQ Accordion">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`rounded-2xl transition-all duration-200 border bg-white overflow-hidden
                    ${
                      isOpen
                        ? "border-[#2f5d50]/30 shadow-md ring-1 ring-[#2f5d50]/15"
                        : "border-gray-200/80 shadow-xs hover:border-gray-300"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex justify-between items-center w-full p-5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2f5d50]"
                  >
                    <span className={`text-base font-semibold transition-colors pr-4 ${isOpen ? "text-[#2f5d50]" : "text-gray-900"}`}>
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200
                        ${isOpen ? "bg-[#2f5d50] text-white" : "bg-slate-100 text-gray-600"}
                      `}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <Plus size={16} />
                      </motion.div>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm sm:text-[15px] text-gray-600 leading-relaxed border-t border-gray-100/70 pt-3">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}