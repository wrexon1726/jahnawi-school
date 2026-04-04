"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Lucas Anderson",
    text: "His study method works amazingly well. I improved my coding skills quickly.",
    image: "/images/user1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jacob Jones",
    text: "Moving from free tutorials to structured learning made a huge difference.",
    image: "/images/user2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Smith",
    text: "Great mentorship and practical projects helped me build confidence.",
    image: "/images/user3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Ralph Edwards",
    text: "The learning experience is very interactive and beginner friendly.",
    image: "/images/user4.jpg",
    rating: 5,
  },
];

export default function TestimonialSectionPage() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Voices From Our Global Community
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#2f5d50] to-[#24493f] text-white p-6 rounded-2xl md:row-span-2 flex flex-col justify-between shadow-lg"
          >
            <p className="text-sm leading-relaxed opacity-90">
              "Study-based learning experience helped me understand concepts
              better and build real projects."
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src="/images/main.jpg"
                width={42}
                height={42}
                className="rounded-full object-cover"
                alt="user"
              />
              <div>
                <p className="text-sm font-semibold">
                  Eddie Alexander
                </p>
                <p className="text-xs opacity-70">
                  Student
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other Testimonials */}
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>

              <div className="flex items-center gap-3 mt-6">

                {/* Image */}
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    width={36}
                    height={36}
                    className="object-cover transition duration-300 hover:scale-110"
                    alt={item.name}
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {item.name}
                  </p>

                  {/* Dynamic Stars */}
                  <div className="flex text-yellow-500 text-xs">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
