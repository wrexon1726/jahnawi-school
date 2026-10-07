"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    date: "Jan 04, 2025",
    category: "Parenting",
    title: "Parenting & Early Learning Strategies for the New Term",
  },
  {
    id: 2,
    date: "Jan 05, 2025",
    category: "Campus Life",
    title: "Upcoming Spring School Activities & Annual Sports Day",
  },
  {
    id: 3,
    date: "Jan 06, 2025",
    category: "Excellence",
    title: "Celebrating Our Students' Regional Science Olympiad Wins",
  },
  {
    id: 4,
    date: "Jan 07, 2025",
    category: "Insights",
    title: "Educational Insights: How AI is Assisting in Modern Classrooms",
  },
  {
    id: 5,
    date: "Jan 08, 2025",
    category: "Community",
    title: "Community Outreach & Parent-Teacher Association Updates",
  },
];

export default function NewsSection() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="bg-[#2f5d50] py-16 md:py-24 px-4 sm:px-6 text-white selection:bg-white selection:text-[#2f5d50]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="space-y-3">
            <span className="inline-block bg-white/15 text-white/90 text-xs font-medium tracking-wide uppercase px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
              School Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Latest News & Announcements
            </h2>
          </div>

          <button
            type="button"
            className="self-start sm:self-auto inline-flex items-center gap-2 bg-white text-[#2f5d50] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            View All News
            <ArrowRight size={15} />
          </button>
        </div>

        {/* News List */}
        <div className="space-y-3 md:space-y-4" role="tablist" aria-label="School News">
          {newsData.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <motion.article
                key={item.id}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveId(item.id);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-200 border outline-none
                  ${
                    isActive
                      ? "bg-white text-[#2f5d50] shadow-xl border-white scale-[1.01]"
                      : "bg-white/10 text-white border-white/10 hover:bg-white/15 hover:border-white/20 backdrop-blur-sm"
                  }
                  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f5d50]
                `}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left: Date & Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 min-w-0">
                    <time
                      dateTime={item.date}
                      className={`text-xs sm:text-sm font-medium w-28 shrink-0 tracking-wider transition-colors
                        ${isActive ? "text-[#2f5d50]/70" : "text-white/60"}
                      `}
                    >
                      {item.date}
                    </time>

                    <h3 className="font-semibold text-base sm:text-lg truncate sm:whitespace-normal">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Read Story Action */}
                  <div className="self-end sm:self-auto shrink-0">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#2f5d50] text-white shadow-sm"
                            : "bg-white/15 text-white group-hover:bg-white/25"
                        }
                      `}
                    >
                      Read Story
                      <ArrowRight
                        size={14}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </span>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}