"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

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
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">
            FAQ
          </span>

          <h2 className="text-3xl font-bold mt-4">
            Frequently Asked Questions?
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="relative h-[420px]">
            <Image
              src="/images/college.jpg"
              alt="University"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Accordion */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border p-5"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left font-medium"
                >
                  {faq.question}

                  {active === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {active === index && (
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
