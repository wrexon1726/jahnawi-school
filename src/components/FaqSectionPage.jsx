"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What programs does the university offer?",
    answer:
      "We offer a wide range of undergraduate, postgraduate and research programs across disciplines.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our admission portal by submitting required documents.",
  },
  {
    question: "Are scholarships or financial aid available?",
    answer:
      "Yes, the university offers scholarships based on merit and financial need.",
  },
  {
    question: "Does the university provide on-campus accommodation?",
    answer:
      "Yes, comfortable hostels and housing facilities are available for students.",
  },
  {
    question: "What support services are available for students?",
    answer:
      "We provide career counseling, mentoring programs, and student support services.",
  },
];

export default function FaqSectionPage() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Frequently Asked Questions?
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/college.jpg"
              alt="University"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left font-medium"
                >
                  {faq.question}

                  <motion.div
                    animate={{ rotate: active === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500 mt-3 text-sm leading-relaxed overflow-hidden"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
