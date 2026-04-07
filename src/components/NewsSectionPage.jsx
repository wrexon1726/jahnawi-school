"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const newsData = [
  {
    date: "Jan 04, 2025",
    title: "How can I apply for admission?",
  },
  {
    date: "Jan 05, 2025",
    title: "How can I apply for admission?",
  },
  {
    date: "Jan 06, 2025",
    title: "How can I apply for admission?",
  },
  {
    date: "Jan 07, 2025",
    title: "How can I apply for admission?",
  },
  {
    date: "Jan 08, 2025",
    title: "How can I apply for admission?",
  },
];

export default function NewsSectionPage() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-[#2f5d50] py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">

          <div>
            <span className="bg-white/20 text-sm px-4 py-1 rounded-full backdrop-blur">
              Blog & News
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              News about our university
            </h2>
          </div>

          <button className="bg-white text-[#2f5d50] px-5 py-2 rounded-full text-sm hover:scale-105 transition">
            View All
          </button>

        </div>

        {/* News List */}
        <div className="space-y-4">

          {newsData.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`cursor-pointer flex justify-between items-center rounded-xl px-6 py-5 transition-all duration-300
                
                ${
                  isActive
                    ? "bg-white text-[#2f5d50] shadow-lg scale-[1.02]"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur"
                }`}
              >

                {/* Left */}
                <div className="flex gap-6 items-center">

                  <span className="text-sm opacity-80">
                    {item.date}
                  </span>

                  <p className="font-medium">
                    {item.title}
                  </p>

                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition
                  
                  ${
                    isActive
                      ? "bg-[#2f5d50] text-white"
                      : "bg-white/20"
                  }`}
                >
                  Read More
                  <motion.span
                    animate={{ x: isActive ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.button>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
