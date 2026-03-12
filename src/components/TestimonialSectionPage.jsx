import Image from "next/image";

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
        <div className="text-center mb-12">
          <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">
            Testimonials
          </span>

          <h2 className="text-3xl font-bold mt-4">
            Voices From Our Global Community
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Highlight Card */}
          <div className="bg-[#2f5d50] text-white p-6 rounded-2xl col-span-1 md:row-span-2 flex flex-col justify-between">

            <p className="text-sm leading-relaxed">
              "Study-based learning experience helped me understand concepts
              better and build real projects."
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src="/images/main.jpg"
                width={40}
                height={40}
                className="rounded-full object-contain"
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
          </div>

          {/* Other Testimonials */}
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <p className="text-gray-600 text-sm">
                {item.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <Image
                  src={item.image}
                  width={36}
                  height={36}
                  className="rounded-full object-contain"
                  alt={item.name}
                />

                <div>
                  <p className="text-sm font-semibold">
                    {item.name}
                  </p>

                  <div className="text-yellow-500 text-xs">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
