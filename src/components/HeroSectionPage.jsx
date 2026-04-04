"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSectionPage() {
  return (
    <div>

      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-30">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="px-4 py-2 rounded-full text-sm text-[#2f5d50] border hover:bg-[#2f5d50] hover:text-white transition">
            🎓 Education, Innovation, Lead
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Turn Your Ambition <br />
            into{" "}
            <span className="italic text-[#2f5d50]">
              Achievement
            </span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Empowering students with world-class education,
            innovation, and growth opportunities.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            <button className="bg-[#2f5d50] text-white px-6 py-3 rounded-full 
              hover:scale-105 hover:bg-[#24493f] transition duration-300 shadow-md">
              Apply Now
            </button>

            <button className="border px-6 py-3 rounded-full 
              hover:bg-gray-100 hover:scale-105 transition duration-300">
              Explore Campus
            </button>

          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-10">

            <div className="hover:scale-105 transition">
              <h2 className="text-3xl font-bold">99%</h2>
              <p className="text-gray-500 text-sm">
                Our Success Rate
              </p>
            </div>

            <div className="flex items-center -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1"
                className="w-8 h-8 rounded-full border hover:scale-110 transition" />
              <img src="https://i.pravatar.cc/40?img=2"
                className="w-8 h-8 rounded-full border hover:scale-110 transition" />
              <img src="https://i.pravatar.cc/40?img=3"
                className="w-8 h-8 rounded-full border hover:scale-110 transition" />
            </div>

            <span className="text-sm text-gray-500">
              30k+ Students
            </span>

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >

          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/university.jpg"
              alt="college"
              width={650}
              height={650}
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-5 -left-10 bg-white p-3 rounded-2xl shadow-xl"
          >
            <img
              src="/images/students.jpg"
              className="w-48 h-32 object-cover rounded-xl"
            />
          </motion.div>

        </motion.div>

      </section>
    </div>
  );
}
